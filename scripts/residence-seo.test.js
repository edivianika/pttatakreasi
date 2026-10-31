const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const projects = require('../src/data/residenceSeo.json');
const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

for (const project of Object.values(projects)) {
  test(`${project.path}: crawler receives project content, metadata, and local assets without JavaScript`, () => {
    const html = fs.readFileSync(path.join(__dirname, '..', 'build', project.path, 'index.html'), 'utf8');
    const canonical = `https://www.tatakreasi.com${project.path}`;
    assert.ok(html.includes(`<title>${escape(project.title)}</title>`));
    assert.ok(html.includes(`name="description" content="${escape(project.description)}"`));
    assert.ok(html.includes(`property="og:url" content="${canonical}"`));
    assert.ok(html.includes(`name="twitter:url" content="${canonical}"`));
    assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
    assert.ok(html.includes(`rel="canonical" href="${canonical}"`));
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.ok(!html.includes('<div id="root"></div>'));
    assert.ok(html.includes(project.name));
    assert.ok(html.includes('Jadwalkan'));
    assert.ok(!html.includes('204.674.887') && !html.includes('231.401.929'));
    const graph = JSON.parse(html.match(/<script type="application\/ld\+json" id="page-jsonld">([\s\S]*?)<\/script>/)[1])['@graph'];
    assert.equal(graph.find(node => node['@type'] === 'WebPage').url, canonical);
    assert.equal(graph.find(node => node['@type'] === 'ResidentialComplex').address.streetAddress, project.streetAddress);
    assert.equal(graph.find(node => node['@type'] === 'BreadcrumbList').itemListElement[1].item, canonical);
    assert.ok(html.includes(`href="${project.path === '/narraya' ? '/sedahresidence' : '/narraya'}"`));
    for (const [, asset] of html.matchAll(/(?:src|href)="(\/(?:static\/|sedah\/|narraya\/)[^"?#]*)"/g)) {
      assert.ok(fs.existsSync(path.join(__dirname, '..', 'build', decodeURIComponent(asset))), `Missing asset: ${asset}`);
    }
  });
}
