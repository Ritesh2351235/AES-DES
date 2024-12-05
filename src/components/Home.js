import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const mainTitleRef = useRef(null);
  const subTitleRef = useRef(null);
  const authorsRef = useRef(null);

  useEffect(() => {
    if (mainTitleRef.current && subTitleRef.current && authorsRef.current) {
      // Title animations
      gsap.fromTo(
        mainTitleRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        subTitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power3.out' }
      );

      // Authors animation
      gsap.fromTo(
        authorsRef.current.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'power2.out'
        }
      );
    }
  }, []);


  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1
        ref={mainTitleRef}
        className="text-7xl font-bold text-gray-900 text-center mt-32"
      >
        Hybrid AES DES
      </h1>
      <h2
        ref={subTitleRef}
        className="text-xl font-light text-gray-600 text-center mb-20"
      >
        with chaotic maps
      </h2>
      <h2
        ref={subTitleRef}
        className="text-xl font-medium text-gray-600 text-center "
      >
        Contributors
      </h2>
      <div
        ref={authorsRef}
        className="flex justify-center space-x-6 mb-14 text-gray-700"
      >
        <div className="text-center transform transition-all hover:scale-105 hover:text-black">
          <span className="font-semibold text-lg block">Ritesh H</span>
        </div>
        <div className="text-center transform transition-all hover:scale-105 hover:text-black">
          <span className="font-semibold text-lg block">Shreepad J</span>

        </div>
        <div className="text-center transform transition-all hover:scale-105 hover:text-black">
          <span className="font-semibold text-lg block">Alan M</span>
        </div>
        <div className="text-center transform transition-all hover:scale-105 hover:text-black">
          <span className="font-semibold text-lg block">Shreya P</span>
        </div>
      </div>

      <h1 className="text-4xl font-bold mb-6 text-gray-800">Abstract</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        Data security is a critical concern in the modern digital landscape, requiring innovative encryption techniques to safeguard sensitive information.
        This report introduces a Hybrid AES-DES Encryption Algorithm augmented with a chaotic sequence generated using the logistic map.
        The hybrid approach combines the cryptographic strengths of Advanced Encryption Standard (AES) and Data Encryption Standard (DES),
        leveraging AES for strong encryption and DES for added diversity and efficiency.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        The chaotic sequence, derived from the logistic map, enhances the algorithm's unpredictability by modifying the plaintext before encryption,
        adding an additional layer of security. The logistic map's inherent sensitivity to initial conditions ensures high randomness, making the encrypted data highly resistant to cryptanalytic attacks.
      </p>
      <p className="mb-8 text-gray-700 leading-relaxed">
        This hybrid methodology achieves a balance between security and computational efficiency, providing a robust framework for encrypting data while mitigating vulnerabilities inherent in standalone AES or DES implementations.
      </p>

      <h1 className="text-4xl font-bold mb-6 text-gray-800">Introduction</h1>
      <p className="mb-4 text-gray-700 leading-relaxed">
        In the current era of digitalization, safeguarding sensitive data from unauthorized access is of paramount importance. Cryptographic techniques play a crucial role
        in securing information by converting it into an unreadable format for unauthorized users. Among these techniques, the Advanced Encryption Standard (AES) and the Data
        Encryption Standard (DES) have been widely utilized for their effectiveness in ensuring data confidentiality.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        AES, adopted as a standard in 2001, is a symmetric block cipher that supports key lengths of 128, 192, or 256 bits. It is known for its robustness against cryptanalytic attacks
        and is extensively used in applications requiring high security, such as banking, cloud computing, and telecommunications. However, the complexity of AES may result in increased
        computational overhead in certain scenarios.
      </p>
      <p className="mb-4 text-gray-700 leading-relaxed">
        DES, introduced in 1977, is another symmetric block cipher that operates with a 56-bit key and processes data in 64-bit blocks. While DES is less secure due to its shorter key length,
        it remains relevant in legacy systems and applications requiring faster encryption with moderate security.
      </p>
      <p className="mb-8 text-gray-700 leading-relaxed">
        In this report, we propose a hybrid approach combining AES and DES, aiming to leverage their respective strengths while mitigating their weaknesses. To further enhance security, a chaotic
        sequence generated using the logistic map is incorporated. The logistic map is a simple yet powerful mathematical function characterized by its chaotic behavior and sensitivity to initial conditions.
        These properties make it ideal for generating pseudo-random sequences that can obfuscate data effectively.
      </p>

      <h1 className="text-4xl font-bold mb-6 text-gray-800">Objectives</h1>
      <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
        <li>
          <span className="font-semibold">Develop a Hybrid Encryption Algorithm:</span>
          <span className="ml-2">Combine AES and DES to achieve a balance between security and computational efficiency.</span>
        </li>
        <li>
          <span className="font-semibold">Incorporate Chaotic Sequences:</span>
          <span className="ml-2">Use the logistic map to introduce additional randomness and enhance data obfuscation, improving resistance to cryptanalytic attacks.</span>
        </li>
        <li>
          <span className="font-semibold">Improve Security:</span>
          <span className="ml-2">Strengthen data protection by adding multiple layers of encryption and randomness.</span>
        </li>
        <li>
          <span className="font-semibold">Analyze Performance:</span>
          <span className="ml-2">Quantify the algorithm's encryption and decryption speeds, entropy levels, and resistance to common attacks.</span>
        </li>
      </ul>
    </div>
  );
};

export default Home;
