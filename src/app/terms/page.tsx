import React from 'react';

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Kullanım Koşulları</h1>
        <p className="mb-4">
          Lütfen Atolia uygulamasını kullanmadan önce bu kullanım koşullarını dikkatlice okuyun. Bu koşullar, Atolia uygulaması tarafından sunulan hizmetleri kullanırken kullanıcının uyması gereken kuralları ve şartları belirlemektedir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Kullanım Şartları</h2>
        <p className="mb-4">
          Atolia uygulamasını kullanarak, kullanıcı aşağıdaki koşulları kabul etmiş olur:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li className="mb-2"><strong>a.</strong> Kullanıcının, Atolia uygulamasını yalnızca yasal amaçlar için kullanması gerekmektedir. Kullanıcı, uygulamayı yasal olmayan amaçlarla kullanamaz.</li>
          <li className="mb-2"><strong>b.</strong> Kullanıcının, Atolia uygulamasını kullanarak diğer kullanıcıların gizliliğini ihlal etmesi yasaktır.</li>
          <li className="mb-2"><strong>c.</strong> Kullanıcının, Atolia uygulamasını kullanarak diğer kullanıcıları taciz etmesi, tehdit etmesi, aşağılaması veya rahatsız etmesi yasaktır.</li>
          <li className="mb-2"><strong>d.</strong> Kullanıcının, Atolia uygulamasını kullanarak sahte veya yanıltıcı bilgiler sağlaması yasaktır.</li>
          <li className="mb-2"><strong>e.</strong> Kullanıcının, Atolia uygulamasında yer alan herhangi bir içeriği kopyalaması, dağıtması veya çoğaltması yasaktır.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Hizmetlerin Değiştirilmesi</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcılara sunduğu hizmetleri herhangi bir zamanda değiştirme veya sonlandırma hakkını saklı tutar. Uygulama, kullanıcılara önceden bildirim yaparak veya yapmadan bu hizmetleri değiştirme hakkına sahiptir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Kullanıcının Sorumluluğu</h2>
        <p className="mb-4">
          Kullanıcı, Atolia uygulamasını kullanarak yaptığı tüm faaliyetlerden tamamen sorumludur. Kullanıcı, uygulama kullanımı sırasında yasalara, düzenlemelere ve bu kullanım koşullarına uygun davranmakla yükümlüdür.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Garanti ve Sorumluluk Sınırlaması</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcılara sunulan hizmetlerin kesintisiz ve hatasız olacağını garanti etmez. Uygulama, herhangi bir kesinti veya hata nedeniyle oluşan zarar veya kayıplardan sorumlu tutulamaz.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Hukuki İşlemler</h2>
        <p className="mb-4">
          Atolia uygulamasının kullanımı sırasında herhangi bir yasa veya düzenlemeye aykırı faaliyetlerin tespit edilmesi durumunda, uygulama bu faaliyetleri sonlandırma veya ilgili makamlara bildirme hakkına sahiptir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Kullanım Koşullarının Değiştirilmesi</h2>
        <p className="mb-4">
          Bu kullanım koşulları, Atolia uygulamasının hizmetleri sunarken kullanıcılara uymaları gereken kuralları ve şartları belirlemektedir. Atolia uygulaması, kullanım koşullarını değiştirme hakkını saklı tutar. Değişiklikler, Atolia uygulamasının internet sitesinde yayınlanarak yürürlüğe girecektir. Bu nedenle, kullanıcıların bu koşulları düzenli olarak kontrol etmesi ve değişikliklerden haberdar olması gerekmektedir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">İletişim</h2>
        <p className="mb-4">
          Atolia uygulamasıyla ilgili herhangi bir sorunuz veya sorununuz varsa, lütfen <a href="mailto:support@atolia.com" className="text-blue-500">info@atolia.com</a> adresine e-posta göndererek bizimle iletişime geçin.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Sonuç</h2>
        <p className="mb-4">
          Atolia uygulamasını kullanarak, kullanıcının bu kullanım koşullarına uygun davranması ve uygulamanın sunduğu hizmetleri yalnızca yasal amaçlar için kullanması gerekmektedir. Kullanıcı, Atolia uygulamasını kullanarak yaptığı tüm faaliyetlerden tamamen sorumludur ve uygulama, herhangi bir hata veya kesintiden kaynaklanan zarar veya kayıplardan sorumlu tutulamaz.
        </p>
      </div>
    </div>
  );
};

export default TermsPage;
