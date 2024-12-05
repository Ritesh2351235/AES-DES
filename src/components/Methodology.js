import React from 'react';

const Methodology = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <h1 className="text-4xl font-bold mb-6 text-gray-800">Methodology</h1>
    <p className="mb-6 text-gray-600 leading-relaxed">
      The proposed encryption system utilizes a hybrid approach combining AES (Advanced Encryption Standard) and DES (Data Encryption Standard),
      alongside the incorporation of a Logistic Map to generate chaotic sequences for enhanced security. The methodology can be broken down into several key steps:
    </p>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">1. Key and IV Generation</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <span className="font-semibold">AES and DES Key Generation:</span> The system generates cryptographic keys for both AES (256-bit) and DES (56-bit). These keys are randomly generated using
          the <code className="bg-gray-100 px-1 rounded">RAND_bytes</code> function provided by the OpenSSL library, ensuring unpredictability and strength in the encryption process.
        </li>
        <li>
          <span className="font-semibold">Initialization Vector (IV):</span> An IV of 128 bits is generated for AES encryption to ensure that identical plaintexts yield different ciphertexts on subsequent encryptions.
        </li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">2. Chaotic Sequence Generation</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <span className="font-semibold">Logistic Map for Sequence Generation:</span> To introduce an additional layer of security, a chaotic sequence is generated using the logistic map equation:
          <span className="italic">xn+1 = r ⋅ xn ⋅ (1 − xn)</span> where <span className="italic">r</span> is a constant in the range 3.57 to 4, which produces chaotic, unpredictable sequences.
          This sequence is used to modify the plaintext data before encryption by XORing the sequence values with the data. The sensitivity of the logistic map to initial
          conditions enhances the unpredictability of the ciphertext.
        </li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">3. Data Encryption</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <span className="font-semibold">AES Encryption:</span> The system encrypts the modified plaintext data using AES-256-CBC (Cipher Block Chaining mode), where the input data is processed in 128-bit blocks.
          AES provides strong security due to its 256-bit key size and multiple rounds of transformations (SubBytes, ShiftRows, MixColumns, AddRoundKey).
        </li>
        <li>
          <span className="font-semibold">DES Encryption:</span> After AES encryption, DES is applied as a secondary layer of encryption. This two-step encryption approach mitigates the risks associated with
          each individual algorithm, leveraging AES's strength and DES's additional complexity.
        </li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">4. Data Decryption</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <span className="font-semibold">DES Decryption:</span> The decryption process starts with DES, where the encrypted data is decrypted using the corresponding 56-bit DES key. Since DES works in a symmetric
          manner, the decryption is straightforward, though it is now more secure as part of the hybrid approach.
        </li>
        <li>
          <span className="font-semibold">AES Decryption:</span> After DES decryption, AES decryption is applied to retrieve the original data. AES decryption follows the inverse operations of its encryption process,
          ensuring that the data is correctly recovered.
        </li>
        <li>
          <span className="font-semibold">Reversing Chaotic Modification:</span> During decryption, the chaotic sequence generated during encryption is used to reverse the XOR operation, restoring the original data.
        </li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">5. Security and Performance Analysis</h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li>
          <span className="font-semibold">Security:</span> The hybrid approach benefits from the strengths of both AES and DES, providing a balanced solution for security and efficiency.
          AES's larger key size and resistance to known cryptanalytic techniques offer robust protection, while DES adds a secondary layer of encryption to thwart potential attacks.
        </li>
        <li>
          <span className="font-semibold">Performance:</span> While AES provides high-speed encryption, DES ensures compatibility with older systems. The additional use of a chaotic sequence ensures an unpredictable
          encryption pattern, making cryptanalysis significantly more difficult.
        </li>
      </ul>
    </section>

    <div className="flex justify-center space-x-4 my-8">
      <img
        src="/images/BD1.jpeg?height=5&width=10"
        alt="Encryption Process Flow Diagram"
        className="w-1/2 rounded-lg shadow-md"
      />
      <img
        src="/images/BD2.jpeg?height=5&width=10"
        alt="Decryption Process Flow Diagram"
        className="w-1/2 rounded-lg shadow-md"
      />
    </div>

    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Hybrid AES-DES?</h2>
      <ul className="list-disc pl-6 space-y-4 text-gray-600">
        <li>
          <span className="font-semibold">Enhanced Security:</span>
          <ul className="list-circle pl-6 mt-2 space-y-2">
            <li><span className="font-semibold">AES Strength:</span> AES is one of the most secure encryption algorithms available. It supports key lengths of 128, 192, and 256 bits, making it resistant to brute-force attacks.</li>
            <li><span className="font-semibold">DES Strength:</span> While DES is considered weak on its own due to its 56-bit key, it adds diversity to the encryption process when combined with AES, making the overall system harder to break.</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Layered Protection:</span> In a hybrid approach, data is first encrypted with AES and then re-encrypted with DES. This layered approach ensures that even if one encryption layer
          is compromised, the other layer protects the data.
        </li>
        <li>
          <span className="font-semibold">Legacy Compatibility:</span> Many older systems still use DES. Combining AES with DES provides a way to maintain backward compatibility while enhancing security.
        </li>
        <li>
          <span className="font-semibold">Defense Against Cryptographic Attacks:</span> Combining two algorithms with different structures minimizes the risk of specific attacks, such as side-channel attacks,
          as attackers must bypass both layers independently.
        </li>
        <li>
          <span className="font-semibold">Efficiency Balance:</span> DES is faster than AES due to its simpler design but less secure. By using DES for smaller chunks of data and AES for more critical, larger data,
          a balance between speed and security is achieved.
        </li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Why Logistic Map for Chaotic Sequence?</h2>
      <p className="mb-4 text-gray-600">The logistic map is a mathematical function defined as:</p>
      <p className="mb-6 text-gray-600 italic">xn+1 = r ⋅ xn ⋅ (1 − xn)</p>
      <p className="mb-6 text-gray-600">where <span className="italic">r</span> is the control parameter (commonly <span className="italic">r = 4</span>) and <span className="italic">x0</span> is the initial value.</p>
      <h3 className="text-2xl font-semibold mb-4 text-gray-700">Reasons for Using Logistic Map:</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-600">
        <li><span className="font-semibold">Chaotic Nature:</span> For <span className="italic">r = 4</span>, the logistic map exhibits chaotic behavior, meaning it is highly sensitive to initial conditions and generates unpredictable, non-repeating sequences.</li>
        <li><span className="font-semibold">Pseudo-randomness:</span> The output of the logistic map resembles random numbers, making it ideal for cryptographic use, where unpredictability is essential.</li>
        <li><span className="font-semibold">High Sensitivity:</span> A small change in the initial value <span className="italic">x0</span> results in drastically different sequences, making it extremely difficult for attackers to reproduce or predict the sequence.</li>
        <li><span className="font-semibold">Efficient Computation:</span> The logistic map is computationally simple and lightweight, making it suitable for real-time applications or resource-constrained systems like IoT devices.</li>
        <li><span className="font-semibold">Improved Entropy:</span> By modifying plaintext data with the chaotic sequence, the entropy (randomness) of the data increases, adding an additional layer of security.</li>
        <li><span className="font-semibold">Integration with Encryption:</span> When combined with AES-DES encryption, the logistic map ensures that even before encryption, the data is obfuscated, making the system doubly secure.</li>
      </ul>
    </section>

    <section className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Simple Overview of Tools Used</h2>
      <ul className="list-disc pl-6 space-y-4 text-gray-600">
        <li>
          <span className="font-semibold">OpenSSL:</span> OpenSSL is an open-source cryptographic library that provides a suite of encryption algorithms, including AES and DES.
          It handles key generation, encryption, decryption, and secure random number generation efficiently. OpenSSL is widely used in secure communication protocols like SSL/TLS for data encryption.
        </li>
        <li>
          <span className="font-semibold">C Programming Language:</span> The encryption system is implemented in C, which is known for its high performance and low-level control over system resources.
          C is widely used for cryptographic applications due to its ability to perform bit-level operations and manage memory efficiently. It integrates well with cryptographic libraries like OpenSSL.
        </li>
        <li>
          <span className="font-semibold">Logistic Map (Chaotic Sequence):</span> The Logistic Map is a mathematical function used to generate pseudo-random, chaotic sequences.
          These sequences are sensitive to initial conditions, making them useful in cryptography for generating unpredictable sequences that add an additional layer of security to the encryption process.
        </li>
        <li>
          <span className="font-semibold">File I/O Operations:</span> Standard C file handling functions (such as <code className="bg-gray-100 px-1 rounded">fopen()</code>, <code className="bg-gray-100 px-1 rounded">fread()</code>, <code className="bg-gray-100 px-1 rounded">fwrite()</code>, and <code className="bg-gray-100 px-1 rounded">fclose()</code>) are used to read input data from files
          and write the encrypted or decrypted data to output files. This allows for seamless processing of data in the encryption and decryption workflows.
        </li>
      </ul>
    </section>
  </div>
);

export default Methodology;

