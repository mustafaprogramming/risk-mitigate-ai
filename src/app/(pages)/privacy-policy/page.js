//components
import Banner from '@/app/components/Banners'
import { SecondaryHero } from '@/app/components/Hero'

export default function PrivacyPolicy() {
  return (
    <main>
      <SecondaryHero
        heading={'Privacy Policy'}
        text={[
          'At RiskMitigateAI, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our platform and services. By accessing or using RiskMitigateAI, you agree to the terms of this Privacy Policy.',
        ]}
      />
      <section className='flex flex-col px-5 gap-10 mx-auto lg:w-[60%] md:w-[80%] w-full'>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Information We Collect</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <h4 className='font-semibold heading-md'>
              Information You Provide
            </h4>
            <p className='text-[#C5C6C5]'>
              We may use the information we collect from you in the following
              ways:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                <strong className='text-white'>Account Information:</strong>{' '}
                When you sign up for beta access or create an account, we
                collect your email address and wallet details.
              </li>
              <li>
                <strong className='text-white'>Communications:</strong> If you
                contact us, we may collect your name, email address, and the
                content of your communication.
              </li>
            </ul>
          </article>
          <article className='pl-6 flex flex-col gap-4'>
            <h4 className='font-semibold heading-md'>
              Information We Collect Automatically
            </h4>
            <p className='text-[#C5C6C5]'>
              We may use the information we collect from you in the following
              ways:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                <strong className='text-white'>Usage Data:</strong> Includes
                details about how you use our platform, such as pages visited,
                features accessed, and time spent on the platform.
              </li>
              <li>
                <strong className='text-white'>Device Information:</strong>{' '}
                Information about the device you use, including browser type,
                operating system, and IP address.
              </li>
            </ul>
          </article>
          <article className='pl-6 flex flex-col gap-4'>
            <h4 className='font-semibold heading-md'>Blockchain Data</h4>
            <p className='text-[#C5C6C5]'>
              We may use the information we collect from you in the following
              ways:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                <strong className='text-white'>On-Chain Activity:</strong> As a
                blockchain-based platform, we may collect publicly available
                data associated with your wallet address, such as transaction
                history, collateral positions, and lending activities.
              </li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>How We Use Your Information</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              We use the information we collect to:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>Provide, operate, and improve our services.</li>
              <li>
                Send updates, alerts, and notifications related to your account
                and platform activity.
              </li>
              <li>
                Analyze platform usage to enhance functionality and user
                experience.
              </li>
              <li>Respond to your inquiries and provide support.</li>
              <li>
                Comply with legal obligations and enforce our Terms of Service.
              </li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>
            How We Protect Your Information
          </h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              We implement industry-standard security measures to protect your
              information, including:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>Encryption of sensitive data.</li>
              <li>Secure access controls to prevent unauthorized access.</li>
              <li>Regular audits and updates to our security practices.</li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Sharing Your Information</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              We do not sell, rent, or trade your personal information. However,
              we may share your information in the following circumstances:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                <strong className='text-white'>With Service Providers:</strong>{' '}
                To facilitate services such as hosting, analytics, and customer
                support.
              </li>
              <li>
                <strong className='text-white'>For Legal Reasons:</strong> To
                comply with applicable laws, regulations, or legal requests.
              </li>
              <li>
                <strong className='text-white'>
                  In Case of Business Transfers:{' '}
                </strong>{' '}
                If RiskMitigateAI is involved in a merger, acquisition, or sale
                of assets, your information may be transferred to the successor
                entity.
              </li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Your Rights</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              You have the following rights concerning your information:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                <strong className='text-white'>Access and Correction:</strong>{' '}
                Request access to or correction of your personal data.
              </li>
              <li>
                <strong className='text-white'>Data Deletion:</strong> Request
                the deletion of your personal data, subject to legal
                obligations.
              </li>
              <li>
                <strong className='text-white'>Opt-Out:</strong> Opt-out of
                receiving marketing communications by following the unsubscribe
                link in our emails.
              </li>
            </ul>
            <p className='text-[#C5C6C5]'>
              To exercise these rights, please contact us at
              contact@riskmitigateai.com.
            </p>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>
            Cookies and Tracking Technologies
          </h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              We use cookies and similar technologies to:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>Analyze platform usage and improve functionality.</li>
              <li>
                Remember user preferences and enhance the user experience.
              </li>
            </ul>
            <p className='text-[#C5C6C5]'>
              You can manage or disable cookies through your browser settings.
              However, doing so may impact your ability to use certain features
              of our platform.
            </p>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Third-Party Links</h3>
          <p className='text-[#C5C6C5] pl-6'>
            Our platform may contain links to third-party websites or services.
            We are not responsible for the privacy practices of these external
            sites. We encourage you to review their privacy policies before
            providing personal information.
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Changes to This Privacy Policy</h3>
          <p className='text-[#C5C6C5] pl-6'>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the effective date will be updated accordingly. We encourage you to review this policy periodically to stay informed about how we are protecting your information.
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Contact Us</h3>
          <p className='text-[#C5C6C5] pl-6'>
          If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>
          <p className='text-[#C5C6C5] pl-6'><strong className='text-white'>E-mail: </strong>contact@riskmitigateai.com</p>
        </div>
      </section>
      <Banner btnText={'get started'} title={'Let’s try our service now!'} text={'With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.'} />
    </main>
  )
}
