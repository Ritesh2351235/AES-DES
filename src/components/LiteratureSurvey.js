import React from 'react';

const LiteratureSurvey = () => (
  <div className="container mx-auto px-4 py-8 max-w-4xl">
    <h1 className="text-4xl font-bold mb-8 text-gray-800">Literature Review on AES, DES, Hybrid AES-DES, and Logistic Map</h1>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">Advanced Encryption Standard (AES)</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        AES, established by the National Institute of Standards and Technology (NIST) in 2001, is a symmetric encryption algorithm designed for high security and performance.
        It uses fixed block sizes of 128 bits and supports key sizes of 128, 192, or 256 bits. AES operates in rounds, employing transformations such as SubBytes, ShiftRows,
        MixColumns, and AddRoundKey. Its security stems from its resistance to linear and differential cryptanalysis, making it a standard for secure data transmission.
      </p>
      <p className="mb-4 text-gray-600"><span className="font-semibold">Source:</span> NIST AES Specification</p>
      <img src="/images/AES.jpg?height=300&width=500" alt="AES Illustration" className="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-md" />
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">Data Encryption Standard (DES)</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        DES, developed in the 1970s, encrypts 64-bit blocks of data using a 56-bit key. It processes data through 16 rounds of substitution and permutation operations.
        While revolutionary at its inception, DES is now considered insecure due to its susceptibility to brute-force attacks. Its successor, Triple DES (3DES), improved
        security by applying DES three times with different keys, but at the cost of efficiency.
      </p>
      <img src="/images/DES.jpg?height=300&width=500" alt="DES Illustration" className="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-md" />
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">Hybrid AES-DES Approach</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        The hybrid AES-DES approach combines the strengths of AES and DES to create a layered encryption system. AES provides strong data protection with its large key sizes
        and complex transformations, while DES adds an additional encryption layer for diversity and complexity. This hybrid methodology is particularly effective in scenarios
        requiring a balance of performance and security, especially in legacy systems that still rely on DES.
      </p>
      {/* Note: No image provided for this section */}
    </section>

    <section className="mb-12">
      <h2 className="text-3xl font-semibold mb-4 text-gray-700">Logistic Map for Chaotic Sequences</h2>
      <p className="mb-4 text-gray-600 leading-relaxed">
        The logistic map, represented by the equation <span className="italic">xn+1 = r ⋅ xn ⋅ (1 − xn)</span>, exhibits chaotic behavior when the parameter <span className="italic">r</span> is in the range 3.57–4.
        This chaotic nature is leveraged in cryptography to introduce unpredictability and pseudo-randomness. The sensitivity of the logistic map to initial conditions makes it
        particularly useful in generating unique sequences for encryption, enhancing resistance to cryptanalytic attacks.
      </p>
      <img src="/images/logmap.jpg?height=300&width=500" alt="Logistic Map Illustration" className="w-full max-w-2xl mx-auto my-8 rounded-lg shadow-md" />
    </section>
  </div>
);

export default LiteratureSurvey;

