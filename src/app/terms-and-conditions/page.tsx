import { NavBarHome } from '@/components/navBar';
import React from 'react';
import Footer1 from '../footer1';

const TermsAndConditions = () => {
  return (
    <div>
      <NavBarHome />
      <div className="mx-auto mt-12 max-w-5xl px-4 py-10 text-gray-800">
        <h1 className="mb-6 text-4xl font-bold text-zinc-900">
          Terms and Conditions
        </h1>

        <p className="mb-6">
          AV Technosys undertakes projects on a Time and Material basis. By
          using our services, you agree to the following terms:
        </p>

        {/* Section 1 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">1. Payment Terms</h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            We evaluate each project and provide detailed estimates with
            associated costs. All fees are exclusive of VAT, GST, and other
            applicable taxes.
          </li>
          <li>
            Payments under period-based pricing (hourly, weekly, monthly) must
            be made in advance as per the agreed proposal or booking
            requirements.
          </li>
          <li>
            For fixed-price projects, payments must be made as per the
            milestones or phases defined in your proposal or contract.
          </li>
        </ul>

        {/* Section 2 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          2. Resources and Timing
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            AV Technosys will assign resources based on project scope and
            requirements.
          </li>
          <li>
            Our development center operates Monday to Friday, 9:30 AM to 6:30 PM
            IST.
          </li>
          <li>
            Public holidays will be communicated in advance, and invoices will
            be adjusted accordingly.
          </li>
        </ul>

        {/* Section 3 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">3. Service Quality</h2>
        <p className="mb-4">
          We are committed to delivering high-quality services within the
          mutually agreed timelines.
        </p>

        {/* Section 4 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">4. Operations</h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>We follow agile methodologies with full transparency.</li>
          <li>
            Project updates will be shared regularly via your preferred
            channels.
          </li>
          <li>
            Our goal is to deliver cost-effective, reliable, and long-term
            solutions.
          </li>
        </ul>

        {/* Section 5 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          5. Expectations from Clients
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            Provide clear instructions and requirements to help us plan
            properly.
          </li>
          <li>
            Communicate through the assigned Project Manager or developer once
            the team is allocated.
          </li>
          <li>Review daily progress and provide timely feedback.</li>
          <li>
            Inform us of any delays in feedback to avoid project disruption.
          </li>
        </ul>

        {/* Section 6 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          6. What We Avoid Doing
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>We do not work directly on live servers unless specified.</li>
          <li>We never outsource your work to third parties.</li>
          <li>
            We won’t contact your clients unless you provide written approval.
          </li>
        </ul>

        {/* Section 7 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          7. Service Acceptance
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            You’ll receive updates throughout the project and are encouraged to
            test on our development server.
          </li>
          <li>
            After final payment and completion, we will deploy to your
            production environment.
          </li>
          <li>
            Post-acceptance, changes are billable unless under a free bug-fix
            period.
          </li>
          <li>
            Backups are the client’s responsibility unless stated otherwise in a
            signed agreement.
          </li>
        </ul>

        {/* Section 8 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          8. Changes to Privacy Policy
        </h2>
        <p className="mb-4">
          AV Technosys may modify its privacy policy at any time. You should
          review it periodically. If you disagree with the changes, you may
          request deletion or return of your personal information in writing.
        </p>

        {/* Section 9 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">9. Invoices</h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            Invoices can be raised hourly, weekly, monthly, or based on
            milestones.
          </li>
          <li>Rates are based on AV Technosys standard pricing.</li>
          <li>Daily invoices = 8 hours, weekly = 5 working days.</li>
          <li>Monthly = actual business days in the month.</li>
          <li>Advance payment is required to start work.</li>
          <li>Invoices are issued prior to development and must be cleared.</li>
        </ul>

        {/* Section 10 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          10. Termination of Services
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            Services may be terminated if invoices remain unpaid for more than 5
            days.
          </li>
          <li>
            Services may be terminated if any terms are violated or the project
            becomes undeliverable due to client delays or lack of communication.
          </li>
        </ul>

        {/* Section 11 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          11. Warranty Period
        </h2>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>A 30-day warranty applies post-deployment.</li>
          <li>Report bugs in writing during the warranty period.</li>
          <li>
            Verified issues caused by AV Technosys will be resolved free of
            charge.
          </li>
          <li>
            We’re not liable if the issue was not caused by us or occurred after
            code changes by external parties.
          </li>
          <li>
            Commercial success or profitability is not guaranteed by AV
            Technosys.
          </li>
        </ul>

        {/* Section 12 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          12. Things You Should Not Do
        </h2>
        <p className="mb-4">
          During our relationship and for 1 year post-contract, you agree not
          to:
        </p>
        <ul className="mb-4 list-inside list-disc space-y-2">
          <li>
            Attempt to work directly with AV Technosys clients or staff without
            our consent.
          </li>
          <li>
            Hire our developers without prior written approval from AV
            Technosys.
          </li>
        </ul>

        {/* Section 13 */}
        <h2 className="mb-2 mt-6 text-2xl font-semibold">
          13. In Case of Dispute
        </h2>
        <p className="mb-4">
          For clients contracting with AV Technosys (India): All disputes shall
          be governed by Indian law and fall under the jurisdiction of courts in
          Delhi/NCR (or your registered location).
        </p>
        <p className="mb-4">
          Jurisdiction for U.S. or international entities can be specified in
          the contract.
        </p>
      </div>
      <Footer1 className="border-t" />
    </div>
  );
};

export default TermsAndConditions;
