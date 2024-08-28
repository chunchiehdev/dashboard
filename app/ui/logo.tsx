'use client';
import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

type LogoProps = {
  parentRef: React.RefObject<HTMLDivElement>;
};

export default function Logo({ parentRef }: LogoProps) {
  const container = useRef<SVGSVGElement | any>();
  const [parentWidth, setParentWidth] = useState<number>(0);

  // const setupAnimation = () => {
  //   const parentWidth = parentRef.current?.getBoundingClientRect().width;
  //   gsap.to(container.current, { x: parentWidth, rotation: 0 });
  // };

  // useGSAP(
  //   () => {
  //     setTimeout(() => {
  //       if (parentRef.current) {
  //         setupAnimation();
  //       }
  //     }, 0);
  //   },
  //   {
  //     scope: container,
  //     dependencies: [parentRef],
  //     revertOnUpdate: true,
  //   }
  // );

  useEffect(() => {
    if (parentRef.current && container.current) {
      console.log(parentRef.current!.offsetWidth);
      const handleResize = () => setParentWidth(parentRef.current!.offsetWidth);
      handleResize();

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(parentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [parentRef]);

  useEffect(() => {
    if (container.current) {
      gsap.to(container.current, { x: parentWidth, rotation: 0 });
    }
  }, [parentWidth]);

  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-wheat`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" ref={container} />
    </div>
  );
}
