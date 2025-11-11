import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from './sectionHeading';
import { homeFaq } from '@/const';

export function FaqAccordion({ data = null, desc = null }: any) {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 pb-24">
      <SectionHeading
        title=" Frequently Asked Questions"
        desc={desc || 'Let’s clear all your doubts! '}
      />

      <Accordion
        type="single"
        collapsible
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
      >
        {(data || homeFaq).map((item) => (
          <Item key={item.value} value={item.value}>
            <Heading><h3>{item.question}</h3></Heading>
            <Answer>{item.answer}</Answer>
          </Item>
        ))}
      </Accordion>
    </div>
  );
}

function Item({ children, value }) {
  return (
    <AccordionItem
      className="h-fit w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2"
      value={value}
    >
      {children}
    </AccordionItem>
  );
}

function Heading({ children }) {
  return (
    <AccordionTrigger className="text-lg font-normal">
      {children}
    </AccordionTrigger>
  );
}

function Answer({ children, value = '' }) {
  return (
    <AccordionContent className="flex flex-col gap-3 text-balance pb-8 text-base font-light text-gray-700">
      {children}
    </AccordionContent>
  );
}
