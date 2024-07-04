// pages/account-deletion.js

import React from 'react';
import Head from 'next/head';

const AccountDeletion = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <Head>
        <title>Hesap Silme Politikası | Atolia</title>
        <meta name="description" content="Atolia'da hesabınızı nasıl sileceğinizi ve hesap silme işlemi sonrasında verilerinizin nasıl yönetildiğini öğrenin." />
      </Head>
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Hesap Silme Politikası</h1>
        <p className="mb-4">
          Atolia olarak, gizliliğinize ve veri güvenliğinize değer veriyoruz. İşte hesabınızı silme hakkında bilmeniz gereken her şey:
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Hesabınızı Nasıl Silebilirsiniz?</h2>
        <p className="mb-4">
          Hesabınızı doğrudan Atolia uygulaması üzerinden silebilirsiniz. Aşağıdaki adımları izleyin:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Atolia uygulamasını açın ve Profil bölümüne gidin.</li>
          <li className="mb-2">Ayarlar sekmesine gidin.</li>
          <li className="mb-2">'Hesabı Sil' seçeneğini seçin ve ekrandaki talimatları izleyin.</li>
        </ol>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Veri Saklama Politikası</h2>
        <p className="mb-4">
          Hesabınız silindikten sonra:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2">Hesabınızla ilişkilendirilen tüm anonim olmayan veriler kalıcı olarak silinir.</li>
          <li className="mb-2">Sistemimizde hiçbir tanımlanabilir bilgi kalmaz.</li>
        </ul>
        <p className="mb-4">
          Herhangi bir sorunuz varsa veya yardım gerekiyorsa, lütfen destek ekibimizle iletişime geçin.
        </p>
      </div>
    </div>
  );
}

export default AccountDeletion;
