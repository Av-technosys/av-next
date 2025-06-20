'use client';
import {
  TBriefcase,
  TCircularRelation,
  TCode,
  TFlag,
  TUserGroup,
  TWorld,
} from '@/components/icons';
import { cn } from '@/lib/utils';

export function ExperienceSections({ className = '' }: any) {
  const experienceData = [
    {
      title: 'Years of Experience',
      value: '10+',
      icon: TBriefcase,
    },
    {
      title: 'Countries Served',
      value: '50+',
      icon: TFlag,
    },
    {
      title: 'Successful Projects',
      value: '1000+',
      icon: TCode,
    },
    {
      title: 'Client Retention Rate',
      value: '98%',
      icon: TCircularRelation,
    },
    {
      title: 'Clients Worldwide',
      value: '500+',
      icon: TWorld,
    },
    {
      title: 'Team',
      value: '100+',
      icon: TUserGroup,
    },
  ];

  return (
    <div
      className={cn(
        'w-full bg-yellow-50/50 px-4 py-12 md:bg-gradient-to-br md:p-2 md:py-20',
        className
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-12 md:grid-cols-12">
        <div className="flex w-full flex-col gap-12 md:col-span-7">
          <p className="max-w-xl text-3xl font-semibold leading-tight tracking-wider text-gray-800 md:mt-6">
            Why <span className="text-yellow-500">AV Technosys</span> Is the
            Strategic Choice for Your Project
          </p>
          <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 md:gap-y-10">
            {experienceData.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div className="flex w-full flex-col items-center rounded-xl border border-yellow-300 bg-white/30 p-3 md:items-start md:gap-2">
                  <div className="flex items-center gap-2 text-2xl font-semibold text-gray-800 sm:text-4xl md:text-black">
                    <Icon
                      stroke={2}
                      className="block size-5 shrink-0 text-gray-600 md:hidden"
                    />
                    {item.value}
                  </div>
                  <div className="flex items-center gap-2 sm:items-start">
                    <Icon
                      stroke={2}
                      className="hidden size-5 shrink-0 text-gray-600 md:block"
                    />
                    <p className="text-sm font-medium text-gray-600">
                      {item.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-6 grid w-full md:col-span-5 md:mt-0">
          {/* {experienceData2.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                className={cn(
                  'flex w-full skew-x-3 cursor-pointer flex-col gap-3 rounded-xl border bg-white p-4 shadow-lg shadow-yellow-100 duration-200',
                  idx % 2 === 0
                    ? 'sm:-translate-y-4 hover:md:-translate-y-6'
                    : 'sm:translate-y-4 hover:md:translate-y-2'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon stroke={2} className="size-7 shrink-0 text-gray-600" />
                  <p className="text-2xl font-semibold">{item.title}</p>
                </div>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            );
          })} */}
          <img
            className="h-full w-full rounded-md object-cover"
            src="/new/experience-img.png"
          />
        </div>
      </div>
    </div>
  );
}
