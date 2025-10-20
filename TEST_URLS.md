# Test URLs for Narraya Virtual Page

## Default WhatsApp Number
```
http://localhost:3000/narraya-virtual
```
- Uses default WhatsApp: 628133138887

## Custom WhatsApp Numbers
```
http://localhost:3000/narraya-virtual?wa=6289679249759
http://localhost:3000/narraya-virtual?wa=6282131813698
http://localhost:3000/narraya-virtual?wa=6281234567890
```

## Production URLs (after deployment)
```
https://yourdomain.vercel.app/narraya-virtual
https://yourdomain.vercel.app/narraya-virtual?wa=6289679249759
https://yourdomain.vercel.app/narraya-virtual?wa=6282131813698
```

## How it works:
1. If `?wa=` parameter is provided, it uses that number
2. If no parameter, it uses default from companyInfo.whatsapp
3. The number is displayed in the debug info box when custom number is used
4. All WhatsApp and phone buttons use the dynamic number
