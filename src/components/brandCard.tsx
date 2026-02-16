import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function BrandCard({ brand }: any) {
  return (
    <div className={`h-full rounded-3xl ${brand.theme.gradientBorder} p-[2px]`}>
      <Card className="h-full overflow-hidden rounded-3xl border-0 bg-[#0b1324] text-white">
        <div className="grid h-full w-full md:grid-cols-3">
          <div className="col-span-3 bg-[#0b1324] p-4 md:col-span-2 md:p-10">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl">
                  <Image
                    src={brand.icon}
                    alt={brand.name}
                    className="p-3 md:p-3"
                    fill
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{brand.name}</h3>

                  <span
                    className={`mt-2 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2 py-1 text-xs ${brand.theme.accent} md:text-sm`}
                  >
                    🌍 {brand.badge}
                  </span>
                </div>
              </div>

              <h2 className={`text-2xl font-bold leading-tight md:text-4xl`}>
                {brand.title}
              </h2>

              <p
                className={`${brand.theme.text} leading-relaxed text-white/60`}
              >
                {brand.description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                {brand.tags.map((tag: string, i: number) => (
                  <span
                    key={i}
                    className={`rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-1 text-sm ${brand.theme.accent} md:text-base`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button
                asChild
                variant="outline"
                className={`mt-4 border-emerald-400/40 hover:text-black ${brand.theme.accent} ${brand.theme.buttonBorder} bg-transparent font-bold`}
              >
                <Link href={brand.website} target="_blank">
                  Visit Website
                  <ExternalLink size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <div
            className={`col-span-3 flex h-full w-full flex-col items-center justify-center bg-[#062e23] p-4 md:col-span-1 md:p-10 ${brand.theme.rightBg} ${brand.theme.text}`}
          >
            <div className="relative mb-6 h-24 w-24 overflow-hidden rounded-full bg-white">
              <Image
                src={brand.icon}
                alt={brand.name}
                className="p-3 md:p-3"
                fill
              />
            </div>

            <div
              className={`mb-6 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm ${brand.theme.accent}`}
            >
              <Link href={brand.website} target="_blank">
                {' '}
                {brand.website}
              </Link>
            </div>

            <div className="w-full max-w-xs space-y-4">
              {brand.stats.map((stat: any, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
                >
                  <span className="text-sm text-white/60">{stat.label}</span>
                  <span className={`${brand.theme.accent} font-semibold`}>
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
