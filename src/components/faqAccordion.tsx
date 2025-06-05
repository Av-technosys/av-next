import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { SectionHeading } from './sectionHeading';

export function FaqAccordion() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 pb-24">
      <SectionHeading
        title=" Frequently Asked Questions"
        desc="Let’s clear all your doubts! "
      />

      <Accordion
        type="single"
        collapsible
        className="grid w-full grid-cols-1 gap-6 md:grid-cols-2"
      >
        <div className="flex flex-col gap-6">
          <Item value="item-1">
            <Heading>
              What mobile app development services does AV Technosys offer?
            </Heading>
            <Answer>
              <p>
                As a trusted and experienced mobile app development company, we
                offer a wide range of AI-powered mobile app development services
                such as:
              </p>
              <ul className="list-disc pl-4">
                <li>Android app development</li>
                <li>iOS app development</li>
                <li>Cross-platform app development</li>
                <li>Flutter app development</li>
                <li>React Native app development and more.</li>
              </ul>
              <p>
                We prioritize client satisfaction and go the extra mile to offer
                our clients outstanding solutions in the form of a mobile app.
              </p>
            </Answer>
          </Item>

          <Item value="item-2">
            <Heading>
              What types of specialization can I expect from AV Technosys?
            </Heading>
            <Answer>
              <p>
                Serving all industry domains, the specialization you can expect
                from us includes:
              </p>
              <ul className="list-disc pl-4">
                <li>AI-powered app and software solutions</li>
                <li>SaaS product development</li>
                <li>Agile software development</li>
                <li>Emerging technology integration</li>
                <li>UI/UX designing and development</li>
                <li>Futuristic AI-driven E-commerce</li>
                <li>Software product engineering and more.</li>
              </ul>
            </Answer>
          </Item>

          <Item value="item-3">
            <Heading>
              How Do You Ensure the Security of My Data and That of My Users?
            </Heading>
            <Answer>
              <p>
                We care about the safety of your data. We use multiple layers of
                security like encryption both at rest and in motion, safe
                coding, and regular security checks. In addition, we follow the
                GDPR and other relevant data security rules, which means that
                data is treated with the utmost privacy and safety.
              </p>
            </Answer>
          </Item>
          <Item value="item-4">
            <Heading>
              What are the benefits of AI-driven digital transformation?
            </Heading>
            <Answer>
              <p>
                The digital transformation is the new normal, but it has some
                challenges. We are ready to assist in removing all roadblocks to
                your digital journey. The benefits our solutions can provide you
                with:
              </p>
              <ul className="list-disc pl-4">
                <li>Improved ROI</li>
                <li>2X growth</li>
                <li>Enhanced efficiency</li>
                <li>Informed decision making</li>
                <li>High profitability</li>
              </ul>
            </Answer>
          </Item>
        </div>
        <div className="flex flex-col gap-6">
          <Item value="item-5">
            <Heading>
              Does AV Technosys offer post-release support and maintenance
              services?
            </Heading>
            <Answer>
              <p>
                As a leading AI-driven digital transformation company, we
                provide best-in-class post-release and maintenance services.
                Whether you are building your app from scratch or upgrading from
                a legacy version, we are ready to assist you at every step.
              </p>
            </Answer>
          </Item>
          <Item value="item-6">
            <Heading>What's required to start with AV Technosys?</Heading>
            <Answer>
              <p>
                The answer is only an idea with a vision, and we ensure that we
                provide you with a futuristic solution to make your business
                dreams come true. But first, we want to know about your goals,
                which you can make simple for us by scheduling a discovery call.
              </p>
            </Answer>
          </Item>
          <Item value="item-7">
            <Heading>
              What about other services such as integration and migration?
            </Heading>
            <Answer>
              <p>
                AV Technosys, a custom digital transformation solutions
                provider, offers an array of services fulfilling the
                digitalization needs of diverse industries. Whether you need to
                integrate APIs, software, or legacy systems or want to migrate
                to the latest technologies such as AI, Blockchain, IoT, etc., we
                are ready to help.
              </p>
            </Answer>
          </Item>
          <Item value="item-8">
            <Heading>What makes AV Technosys different?</Heading>
            <Answer>
              <p>
                Our win-win factor is simplifying challenges with a
                solution-oriented mindset. What makes us different is:
              </p>
              <ul className="list-disc pl-4">
                <li>
                  Future-ready solutions- Our talented professionals focus on
                  futuristic solutions, leveraging their knowledge and skills in
                  utilizing emerging technologies.
                </li>
                <li>
                  Proven Track Record- Since our inception, we have established
                  ourselves as a trusted AI-driven solutions provider, ensuring
                  quality and on-time delivery.
                </li>
                <li>
                  Tech+Human- We utilize a perfect combination of technology and
                  human resources to deliver outstanding solutions that exceed
                  our clients' expectations.
                </li>
              </ul>
            </Answer>
          </Item>
        </div>
      </Accordion>
    </div>
  );
}

function Item({ children, value }) {
  return (
    <AccordionItem
      className="w-full rounded-md border border-gray-200 bg-gray-50 px-4 py-2"
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
