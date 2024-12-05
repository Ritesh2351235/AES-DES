import React from 'react';

const ResultsApplications = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <h1 className="text-4xl font-bold mb-6 text-gray-800">Results</h1>
    <p className="mb-6 text-gray-600 leading-relaxed">
      The proposed Hybrid AES-DES Encryption Algorithm with Chaotic Sequences has shown promising results in terms of both security and computational efficiency.
      The combination of AES and DES provides a strong defense against cryptanalytic attacks, while the inclusion of chaotic sequences enhances the unpredictability of the encrypted data.
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Encryption and Decryption Speed</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        The encryption and decryption times are competitive with other encryption algorithms, especially when considering the additional layer of security provided by the hybrid approach.
        AES performs encryption at a high speed, while DES provides an additional layer without significantly affecting performance.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Resistance to Attacks</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        The hybrid algorithm has demonstrated strong resistance to various cryptographic attacks, including brute-force, statistical, and differential cryptanalysis.
        The chaotic sequence significantly increases the entropy of the data, making it difficult for attackers to predict or reproduce the encrypted content.
      </p>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Performance in Real-world Scenarios</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        In real-world scenarios, the hybrid AES-DES encryption system performs efficiently, balancing security and speed. It is especially suitable for systems where security is a priority,
        such as in cloud storage and secure communication systems.
      </p>
    </section>
    <img src="/images/results.png?height=300&width=600" alt="Encryption and Decryption Speed Graph" className="w-full rounded-lg shadow-md mb-6" />
    <h1 className="text-4xl font-bold mb-6 text-gray-800">Applications of Hybrid AES-DES Algorithm with Chaotic Sequence</h1>
    <p className="mb-6 text-gray-600 leading-relaxed">Here are detailed applications for the proposed algorithm:</p>

    {[
      {
        title: "Data Transmission Security",
        useCase: "Email encryption, secure financial transactions, and military communications.",
        howItHelps: "By applying the hybrid AES-DES algorithm, combined with chaotic sequence obfuscation, data remains secure during transmission, even over public or untrusted networks."
      },
      {
        title: "Cloud Data Protection",
        useCase: "Protecting sensitive user data in cloud storage solutions (e.g., Google Drive, AWS S3).",
        howItHelps: "Encrypting data with two layers of encryption ensures it is secure even if the cloud provider's infrastructure is breached."
      },
      {
        title: "IoT Devices",
        useCase: "Smart sensors, wearables, and smart home devices.",
        howItHelps: "The lightweight chaotic sequence modification and hybrid encryption offer a balance of security and computational efficiency suitable for resource-constrained devices."
      },
      {
        title: "Multimedia Encryption",
        useCase: "Encrypting video, audio, and images to prevent unauthorized access or piracy.",
        howItHelps: "The hybrid algorithm ensures multimedia files are encrypted in a way that is both secure and fast, crucial for large datasets like videos."
      },
      {
        title: "Healthcare Systems",
        useCase: "Protecting electronic health records (EHRs) in hospitals and clinics.",
        howItHelps: "Adds a layer of protection to sensitive patient data, ensuring compliance with privacy regulations (e.g., HIPAA, GDPR)."
      },
      {
        title: "Blockchain Security",
        useCase: "Securing off-chain data storage and communication in blockchain systems.",
        howItHelps: "Hybrid encryption ensures secure off-chain operations without compromising performance."
      },
      {
        title: "Government and Defense Systems",
        useCase: "Encryption of classified information in national security systems.",
        howItHelps: "Provides a highly secure method for protecting sensitive data against modern threats, including quantum computing."
      },
      {
        title: "Digital Rights Management (DRM)",
        useCase: "Protecting intellectual property, such as software or digital content.",
        howItHelps: "Prevents unauthorized copying or distribution by encrypting digital content with a robust hybrid algorithm."
      }
    ].map((application, index) => (
      <section key={index} className="mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">{index + 1}. {application.title}</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li><span className="font-semibold">Use Case:</span> {application.useCase}</li>
          <li><span className="font-semibold">How it Helps:</span> {application.howItHelps}</li>
        </ul>
      </section>
    ))}
  </div>
);

export default ResultsApplications;

