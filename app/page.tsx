import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">SANSKAR PAUDEL</h1>
          <p className="text-xl mt-2 text-gray-700">
            Co-Founder & CTO at MobiVortex
          </p>

          <div className="flex flex-wrap gap-4 mt-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Phone className="h-4 w-4" />
              <a href="tel:+9779866010209" className="hover:text-blue-600">
                +977 9866010209
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-4 w-4" />
              <a
                href="mailto:poudelsanskar@gmail.com"
                className="hover:text-blue-600"
              >
                poudelsanskar@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Github className="h-4 w-4" />
              <a
                href="https://github.com/sanskarPoudel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                github.com/sanskarPoudel
              </a>
            </div>
            <div className="flex items-center gap-1">
              <Linkedin className="h-4 w-4" />
              <a
                href="https://www.linkedin.com/in/sanskarpaudel/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
              >
                linkedin.com/in/sanskarpaudel
              </a>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>Pokhara, Nepal</span>
            </div>
          </div>
        </header>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            SUMMARY
          </h2>
          <p className="text-gray-700">
            Full Stack Software Engineer with a proven track
            record in designing, building, and deploying scalable web
            applications. Experienced in backend technologies, frontend
            development, and DevOps practices with a passion for creating
            efficient, maintainable solutions that drive business growth.
          </p>
        </section>

        {/* Core Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            CORE SKILLS
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-gray-700">
            <li>
              <span className="font-semibold">Backend Technologies:</span>{" "}
              Node.js, Express.js, NestJS, MongoDB, Redis, Kafka
            </li>
            <li>
              <span className="font-semibold">Frontend Technologies:</span>{" "}
              React.js, HTML, CSS, JavaScript
            </li>
            <li>
              <span className="font-semibold">DevOps & Infrastructure:</span>{" "}
              Docker, Kubernetes, AWS (EC2, SQS, Lambda, S3, etc.), Linux Server
              Management
            </li>
            <li>
              <span className="font-semibold">CI/CD & Deployment:</span> GitHub
              Actions, Nginx, Load Balancing, Caching, Logging & Monitoring
            </li>
            <li>
              <span className="font-semibold">System Architecture:</span>{" "}
              Microservices, RESTful APIs, Event-Driven Systems, Queue-Based
              Asynchronous Processing
            </li>
            <li>
              <span className="font-semibold">
                Additional Tools & Services:
              </span>{" "}
              Payment Gateway Integration, WebSockets, AI Integration, Cloud
              Storage
            </li>
          </ul>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            PROFESSIONAL EXPERIENCE
          </h2>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Co-Founder & CTO
              </h3>
              <p className="text-gray-600">
                MobiVortex, June 2025 - Present
              </p>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
              <li>
                <span className="font-medium">Leadership & Strategy:</span>{" "}
                Co-founded MobiVortex, a comprehensive app monetization and user acquisition platform
              </li>
              <li>
                <span className="font-medium">Technical Architecture:</span>{" "}
                Leading the technical development of platform solutions for mobile app user acquisition, data analytics, and revenue optimization
              </li>
              <li>
                <span className="font-medium">Product Development:</span>{" "}
                Overseeing the development of integrated marketing solutions supporting Android, iOS, and web platforms
              </li>
              <li>
                <span className="font-medium">Innovation & Growth:</span>{" "}
                Driving technical innovation in rewarded ads, personalized video ads, and survey-based revenue generation
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Full Stack Software Engineer
              </h3>
              <p className="text-gray-600">
                Adbreakmedia, March 2023 - June 2025
              </p>
            </div>
            <ul className="list-disc pl-5 text-gray-700 space-y-1 mb-4">
              <li>
                <span className="font-medium">Backend Development:</span>{" "}
                Architect and implement backend solutions powering
                Adbreakmedia's network
              </li>
              <li>
                <span className="font-medium">Cloud & DevOps:</span> Utilize AWS
                services for different purposes like hosting applications, asynchronous job processing, sending emails and
                media storage
              </li>
              <li>
                <span className="font-medium">Frontend Contributions:</span>{" "}
                Collaborate with the frontend team to build and improve
                dashboards using Next.js
              </li>
              <li>
                <span className="font-medium">
                  Process & Performance Improvements:
                </span>{" "}
                Introduce caching strategies, CI/CD pipelines (GitHub Actions),
                and monitoring solutions
              </li>
            </ul>

            <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">
              Key Projects Developed:
            </h4>

            <div className="space-y-4 pl-5">
              <div>
                <h5 className="font-semibold text-gray-800">
                  Adbreakmedia Network (
                  <a
                    href="https://adbreakmedia.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    adbreakmedia.com
                  </a>
                  )
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Engineered the complete backend infrastructure that powers
                    the Adbreakmedia advertising network
                  </li>
                  <li>
                    Implemented robust APIs and data processing pipelines for ad
                    delivery and tracking
                  </li>
                  <li>
                    Collaborated with Frontend Designers to built interactive dashboards for advertisers
                    and publishers
                  </li>
                  <li>
                    Enabled real-time campaign monitoring and optimization
                    through data visualization
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800">
                  Faceverify.ai (
                  <a
                    href="https://faceverify.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    faceverify.ai
                  </a>
                  )
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Developed a comprehensive KYC verification system with
                    advanced facial recognition capabilities
                  </li>
                  <li>
                    Implemented secure payment processing and asynchronous task
                    handling
                  </li>
                  <li>
                    Created an intuitive admin dashboard for verification
                    management
                  </li>
                  <li>
                    Deployed the solution using Kubernetes and AWS services for
                    optimal performance
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800">
                  Gaintplay (
                  <a
                    href="https://gaintplay.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    gaintplay.com
                  </a>
                  )
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Enhanced API performance through strategic implementation of
                    caching layers and load balancing
                  </li>
                  <li>
                    Built a real-time communication system using WebSockets for
                    chat functionality
                  </li>
                  <li>
                    Developed an AI-powered support system leveraging ChatGPT
                    APIs
                  </li>
                  <li>
                    Automated customer service workflows and payment processing
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800">
                  Wizzgift (
                  <a
                    href="https://wizzgift.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    wizzgift.com
                  </a>
                  )
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Architected and built a complete gift card marketplace
                    platform using NestJS for the backend
                  </li>
                  <li>
                    Developed comprehensive admin dashboards for product
                    management and order tracking
                  </li>
                  <li>
                    Implemented inventory control systems and reporting tools
                  </li>
                  <li>
                    Integrated multiple payment gateways with secure transaction
                    processing
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-semibold text-gray-800">
                  Verifylink.io (
                  <a
                    href="https://verifylink.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    verifylink.io
                  </a>
                  )
                </h5>
                <ul className="list-disc pl-5 text-gray-700 space-y-1">
                  <li>
                    Created a link verification system for affiliate marketing
                    that tracks user interactions
                  </li>
                  <li>
                    Implemented tracking based on geographical location and
                    device information
                  </li>
                  <li>
                    Developed high-performance caching solutions to handle
                    traffic spikes
                  </li>
                  <li>
                    Integrated secure payment processing for affiliate payouts
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col md:flex-row md:justify-between mb-1">
              <h3 className="text-lg font-semibold text-gray-800">
                Freelance Full Stack Developer
                <span className="text-sm  ml-1">
                  (
                  <a
                    href="https://www.freelancer.com/u/poudelsanskar8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline text-sm"
                  >
                    Freelancer Profile
                  </a>
                  )
                </span>
              </h3>
              <p className="text-gray-600">2020 - Present</p>
            </div>
            <p className="mb-1 text-gray-700">
              Working on various projects with a focus on implementing specific
              features and developing applications for clients
            </p>
            <p className="font-medium mb-1 text-gray-700">
              Key Responsibilities:
            </p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>
                Implementing feature enhancements and bug fixes for existing web
                applications
              </li>
              <li>
                Creating web applications and components based on client
                requirements
              </li>
              <li>
                Providing technical support and maintenance for client websites
              </li>
              <li>Developing UI components and graphics design solutions</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            EDUCATION
          </h2>
          <h3 className="text-lg font-semibold text-gray-800">
            Bachelor of Engineering in Software Engineering (2018-2023)
          </h3>
          <p className="text-gray-700">
            Pokhara University School of Engineering | Pokhara, Nepal
          </p>
        </section>

        {/* Additional Information Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 border-b border-gray-300 pb-1 mb-3">
            ADDITIONAL INFORMATION
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              <span className="font-medium">
                Communication & Collaboration:
              </span>{" "}
              Strong verbal and written communication skills, collaborative team
              player with experience working in diverse, cross-functional teams
            </li>
            <li>
              <span className="font-medium">Continuous Learning:</span> Actively
              engaged in staying up-to-date with emerging technologies, best
              practices, and industry trends through online courses and
              technical blogs
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
