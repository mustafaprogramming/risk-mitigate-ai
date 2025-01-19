//components
import Banner from '@/app/components/Banners'
import { SecondaryHero } from '@/app/components/Hero'

export default function TremsOfUse() {
  return (
    <main>
      <SecondaryHero
        heading={'Terms of Use'}
        text={[
          'Welcome to RiskMitigateAI! By accessing or using our platform, you agree to comply with these Terms of Use. If you do not agree to these terms, you may not access or use our services.',
        ]}
      />
      <section className='flex flex-col px-5 gap-10 mx-auto lg:w-[60%] md:w-[80%] w-full'>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Definitions</h3>
          <ul className='pl-10 list-disc text-[#C5C6C5]'>
            <li>
              <strong className='text-white'>“Platform”</strong> refers to the
              RiskMitigateAI website and its associated tools, features, and
              services.
            </li>
            <li>
              <strong className='text-white'>“We,” “Us,” or “Our”</strong>{' '}
              refers to RiskMitigateAI.
            </li>
            <li>
              <strong className='text-white'>“User”</strong> refers to any
              individual or entity accessing or using our platform.
            </li>
          </ul>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Use of the Platform</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <h4 className='font-semibold heading-md'>Eligibility</h4>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                You must be at least 18 years old or the age of majority in your
                jurisdiction to use our platform.
              </li>
              <li>
                By using our platform, you represent that you meet these
                eligibility requirements.
              </li>
            </ul>
          </article>
          <article className='pl-6 flex flex-col gap-4'>
            <h4 className='font-semibold heading-md'>
              Account Responsibilities
            </h4>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                You are responsible for maintaining the confidentiality of your
                account credentials.
              </li>
              <li>
                You agree to notify us immediately if you suspect unauthorized
                use of your account.
              </li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Prohibited Activities</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              When using our platform, you agree NOT to:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>Violate any applicable laws or regulations.</li>
              <li>Use the platform for fraudulent or deceptive purposes.</li>
              <li>
                Engage in activities that harm or disrupt the platform’s
                functionality.
              </li>
              <li>
                Reverse-engineer, decompile, or disassemble any aspect of our
                platform.
              </li>
              <li>Share false or misleading information.</li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Intellectual Property</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              All content, features, and functionality on the platform are the
              exclusive property of RiskMitigateAI or its licensors. This
              includes, but is not limited to:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>Text, graphics, and logos.</li>
              <li>Software and code.</li>
              <li>Design and layout.</li>
            </ul>
            <p className='text-[#C5C6C5]'>
              You may not use, reproduce, or distribute any content without
              prior written permission from us.
            </p>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Disclaimer of Warranties</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              <strong>
                RiskMitigateAI is provided on an “as-is” and “as-available”
                basis.
              </strong>
              <br />
              We do not guarantee:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                That the platform will be error-free, secure, or uninterrupted.
              </li>
              <li>
                That the results obtained from using the platform will be
                accurate or reliable.
              </li>
            </ul>
            <p className='text-[#C5C6C5]'>
              We disclaim all warranties, whether express or implied, including
              warranties of merchantability, fitness for a particular purpose,
              and non-infringement.
            </p>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Limitation of Liability</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              To the fullest extent permitted by law, RiskMitigateAI and its
              affiliates will not be liable for:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
                Any indirect, incidental, or consequential damages arising from
                your use of the platform.
              </li>
              <li>
                Loss of data, profits, or business opportunities resulting from
                your use of our services.
              </li>
            </ul>
            <p className='text-[#C5C6C5]'>
              Our total liability for any claims related to the platform will
              not exceed the amount you paid us for accessing the platform’s
              services.
            </p>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Indemnification</h3>
          <article className='pl-6 flex flex-col gap-4'>
            <p className='text-[#C5C6C5]'>
              You agree to indemnify and hold harmless RiskMitigateAI, its
              affiliates, and employees from any claims, losses, damages, or
              expenses arising from:
            </p>
            <ul className='pl-6 list-disc text-[#C5C6C5]'>
              <li>
              Your violation of these Terms of Use.
              </li>
              <li>
              Your use or misuse of the platform.
              </li>
            </ul>
          </article>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>
          Changes to the Terms          </h3>
          <p className='text-[#C5C6C5] pl-6'>
          We may update these Terms of Use from time to time. Changes will be posted on this page with an updated effective date. Continued use of the platform after changes are made constitutes your acceptance of the revised terms.
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Governing Law</h3>
          <p className='text-[#C5C6C5] pl-6'>These Terms of Use will be governed by the laws of a jurisdiction determined to be reasonable and applicable in the event of a dispute.
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Termination</h3>
          <p className='text-[#C5C6C5] pl-6'>We reserve the right to suspend or terminate your access to the platform at any time, without prior notice, if you violate these Terms of Use or engage in prohibited activities.
          </p>
        </div>
        <div className='flex flex-col gap-8'>
          <h3 className='michroma heading-ml'>Contact Us</h3>
          <p className='text-[#C5C6C5] pl-6'>If you have any questions about these Terms of Use, please contact us at:
          </p>
          <p className='text-[#C5C6C5] pl-6'>
            <strong className='text-white'>E-mail: </strong>
            contact@riskmitigateai.com
          </p>
        </div>
      </section>
      <Banner
        btnText={'get started'}
        title={'Let’s try our service now!'}
        text={
          'With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.'
        }
      />
    </main>
  )
}
