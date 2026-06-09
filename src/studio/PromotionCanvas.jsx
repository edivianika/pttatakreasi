import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import { Circle, Group, Image, Layer, Line, Rect, Stage, Text } from "react-konva";
import { DEFAULT_BRAND_KIT, PROMOTION_FORMATS } from "./config";

function useCanvasImage(url) {
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (!url) {
      setImage(null);
      return undefined;
    }

    const nextImage = new window.Image();
    nextImage.crossOrigin = "anonymous";
    nextImage.onload = () => setImage(nextImage);
    nextImage.src = url;

    return () => {
      nextImage.onload = null;
    };
  }, [url]);

  return image;
}

function useElementWidth(ref) {
  const [width, setWidth] = useState(720);

  useEffect(() => {
    if (!ref.current) return undefined;

    const update = () => setWidth(Math.max(260, Math.min(760, ref.current.clientWidth)));
    update();

    const observer = new ResizeObserver(update);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return width;
}

function getFacadeFrame(format) {
  if (format.id === "story") return { x: 74, y: 560, width: 932, height: 690 };
  if (format.id === "whatsapp") return { x: 565, y: 54, width: 585, height: 520 };
  return { x: 66, y: 450, width: 948, height: 540 };
}

function fitImage(image, frame, transform) {
  if (!image) return null;
  const baseScale = Math.max(frame.width / image.width, frame.height / image.height);
  const scale = baseScale * transform.zoom;
  const width = image.width * scale;
  const height = image.height * scale;
  return {
    width,
    height,
    x: frame.x + (frame.width - width) / 2 + transform.x,
    y: frame.y + (frame.height - height) / 2 + transform.y,
  };
}

function DesignBackdrop({ format, templateId, backgroundImage }) {
  const { width, height } = format;
  const brand = DEFAULT_BRAND_KIT.colors;

  return (
    <>
      <Rect width={width} height={height} fill={brand.ivory} />
      {backgroundImage ? (
        <Image image={backgroundImage} width={width} height={height} opacity={0.28} />
      ) : null}
      <Circle x={width * 0.92} y={height * 0.08} radius={width * 0.24} fill="#E4EFE7" />
      <Circle
        x={width * 0.05}
        y={height * 0.92}
        radius={width * 0.18}
        fill="#F1E8CE"
        opacity={0.7}
      />
      {templateId === "promo-fokus-harga" ? (
        <Rect x={0} y={0} width={Math.max(width * 0.44, 400)} height={height} fill={brand.deepGreen} />
      ) : null}
      {templateId === "syariah-keluarga" ? (
        <>
          <Rect x={0} y={0} width={width} height={height * 0.22} fill="#F6F0E3" />
          <Line
            points={[width * 0.72, 0, width, height * 0.18, width, 0]}
            closed
            fill={brand.gold}
            opacity={0.7}
          />
        </>
      ) : null}
    </>
  );
}

function HeadlineBlock({ format, templateId, creative, project }) {
  const brand = DEFAULT_BRAND_KIT.colors;
  const isLandscape = format.id === "whatsapp";
  const isPromo = templateId === "promo-fokus-harga";
  const textColor = isPromo ? "#FFFFFF" : brand.deepGreen;
  const x = isLandscape ? 64 : 72;
  const y = isLandscape ? 94 : format.id === "story" ? 215 : 136;
  const width = isPromo ? (isLandscape ? 470 : 410) : isLandscape ? 470 : 880;
  const headlineSize = isPromo
    ? isLandscape
      ? 50
      : format.id === "story"
        ? 76
        : 58
    : isLandscape
      ? 58
      : format.id === "story"
        ? 98
        : 74;
  const subheadlineY = isLandscape ? 284 : isPromo ? y + 225 : y + 245;

  return (
    <>
      <Text
        x={x}
        y={y}
        width={width}
        text={project.name.toUpperCase()}
        fill={isPromo ? "#EBD38D" : brand.gold}
        fontFamily="Manrope"
        fontSize={isLandscape ? 15 : 21}
        fontStyle="bold"
        letterSpacing={3}
      />
      <Text
        x={x}
        y={y + (isLandscape ? 37 : 54)}
        width={width}
        text={creative.headline}
        fill={textColor}
        fontFamily="Noto Serif"
        fontSize={headlineSize}
        fontStyle="bold"
        lineHeight={1.06}
      />
      <Text
        x={x}
        y={subheadlineY}
        width={isPromo ? (isLandscape ? 450 : 380) : isLandscape ? 450 : 780}
        text={creative.subheadline}
        fill={isPromo ? "#E7EFEA" : "#496159"}
        fontFamily="Manrope"
        fontSize={isLandscape ? 23 : isPromo ? 25 : 31}
        lineHeight={1.4}
      />
      <Rect
        x={x}
        y={isLandscape ? 430 : format.height - 122}
        width={isLandscape ? 236 : 310}
        height={isLandscape ? 62 : 76}
        cornerRadius={100}
        fill={isPromo ? brand.gold : brand.emerald}
      />
      <Text
        x={x}
        y={(isLandscape ? 430 : format.height - 122) + (isLandscape ? 20 : 24)}
        width={isLandscape ? 236 : 310}
        text={creative.cta}
        align="center"
        fill="#FFFFFF"
        fontFamily="Manrope"
        fontSize={isLandscape ? 18 : 22}
        fontStyle="bold"
      />
    </>
  );
}

const PromotionCanvas = forwardRef(function PromotionCanvas(
  { formatId, project, creative, facadeAsset, transform, templateId },
  ref,
) {
  const wrapperRef = useRef(null);
  const stageRef = useRef(null);
  const format = PROMOTION_FORMATS[formatId];
  const facadeImage = useCanvasImage(facadeAsset.url);
  const logoImage = useCanvasImage(project.logoUrl);
  const backgroundImage = useCanvasImage(creative.backgroundUrl);
  const displayWidth = useElementWidth(wrapperRef);
  const displayHeight = displayWidth * (format.height / format.width);
  const facadeFrame = useMemo(() => getFacadeFrame(format), [format]);
  const fittedFacade = useMemo(
    () => fitImage(facadeImage, facadeFrame, transform),
    [facadeFrame, facadeImage, transform],
  );
  const scale = displayWidth / format.width;

  useImperativeHandle(
    ref,
    () => ({
      exportImage() {
        if (!stageRef.current) return null;
        return stageRef.current.toDataURL({
          pixelRatio: format.width / displayWidth,
          mimeType: "image/png",
        });
      },
    }),
    [displayWidth, format.width],
  );

  return (
    <div ref={wrapperRef} className="studio-canvas-frame" aria-label="Pratinjau banner promosi">
      <Stage ref={stageRef} width={displayWidth} height={displayHeight}>
        <Layer>
          <Group scaleX={scale} scaleY={scale}>
            <DesignBackdrop format={format} templateId={templateId} backgroundImage={backgroundImage} />
            {fittedFacade ? (
              <Group
                clipX={facadeFrame.x}
                clipY={facadeFrame.y}
                clipWidth={facadeFrame.width}
                clipHeight={facadeFrame.height}
              >
                <Image image={facadeImage} {...fittedFacade} />
              </Group>
            ) : null}
            <Rect
              x={facadeFrame.x}
              y={facadeFrame.y}
              width={facadeFrame.width}
              height={facadeFrame.height}
              stroke="#FFFFFF"
              strokeWidth={8}
            />
            <HeadlineBlock format={format} templateId={templateId} creative={creative} project={project} />
            {logoImage ? (
              <Image
                image={logoImage}
                x={format.width - (format.id === "whatsapp" ? 102 : 150)}
                y={format.id === "whatsapp" ? 30 : 42}
                width={format.id === "whatsapp" ? 68 : 96}
                height={format.id === "whatsapp" ? 68 : 96}
              />
            ) : null}
          </Group>
        </Layer>
      </Stage>
    </div>
  );
});

export default PromotionCanvas;
