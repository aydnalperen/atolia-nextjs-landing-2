import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Gizlilik Politikası</h1>
        <p className="mb-4">
          Bu gizlilik politikası, Atolia uygulamasını kullanırken, kullanıcıların kişisel verilerinin nasıl toplandığını, kullanıldığını, paylaşıldığını ve korunduğunu açıklamaktadır.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Veri Toplama</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların uygulamayı kullanırken sağladığı bazı kişisel verileri toplamaktadır. Bu bilgiler, adınız, e-posta adresiniz, telefon numaranız ve profil fotoğrafınız gibi kişisel bilgilerinizi içerebilir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Topladığımız Kişisel Veriler</h2>
        <h3 className="text-xl font-semibold mt-4 mb-2">Doğrudan Kullanıcılar Tarafından Sağlanan Veriler</h3>
        <p className="mb-4">
          Atolia’yı kullanırken kişisel verilerinizi doğrudan bize veya hizmet sağlayıcılarımıza sağlayabilirsiniz. Verilerin niteliği, kullanıcıların uygulamayla ve özellikleriyle nasıl etkileşimde bulunduğuna bağlıdır:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Fotoğraflar:</strong> Kameranıza veya fotoğraf kitaplığınıza erişim izni verirseniz Atolia’ya yüklediğiniz fotoğrafları uygulama işlevleri için işleriz.</li>
          <li><strong>Yazışma Verileri:</strong> Sorularınız da dahil olmak üzere bizimle yapacağınız her türlü iletişim, sağladığınız ilgili iletişim bilgilerinin toplanmasını içerecektir.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Otomatik Olarak Toplanan Veriler</h3>
        <p className="mb-4">
          Atolia’yı kullanırken Atolia veya yetkili üçüncü taraflar, gerektiğinde izninize tabi olarak belirli bilgileri otomatik olarak toplar:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Cihaz Bilgileri:</strong> Mobil cihazınızla ilgili IP adresi, benzersiz cihaz tanımlayıcı, işletim sistemi, mobil ağ ve cihaz dili gibi ayrıntıları içerir.</li>
          <li><strong>Uygulama ve Ülke Bilgileri:</strong> Kullandığınız Atolia sürümü ve indirildiği uygulama mağazasının ülke sürümü.</li>
          <li><strong>Kullanım Ayrıntıları:</strong> Uygulamanın Kullanım sıklığı, erişilen alanlar ve özellikler ve belirli işlevlerle etkileşim.</li>
          <li><strong>Uygulama İçi Satın Alma İşlemleri ve Abonelik Verileri:</strong> Satın almaların zamanı ve niteliği.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-4 mb-2">Üçüncü Taraflardan Toplanan Veriler</h3>
        <p className="mb-4">
          Atolia ve üçüncü taraflar da dahil olmak üzere hizmet sağlayıcılarımız, satıcılarımız ve iş ortaklarımız, bilgi toplamak için çerezler ve SDK'lar gibi teknolojileri kullanır:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>Analiz Araçları:</strong> Google Firebase ve Google Analytics gibi araçlar, uygulama kullanımının ölçülmesine yardımcı olur. Bunlar özellik etkileşimi, satın alma bilgileri ve Atolia içindeki eylemler hakkında veri toplar.</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Veri Kullanımı</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların sağladığı kişisel verileri uygulamanın işleyişi için kullanmaktadır. Bu bilgiler, kullanıcı hesaplarının oluşturulması ve yönetilmesi, kullanıcı deneyimlerinin iyileştirilmesi ve kullanıcı desteği için kullanılmaktadır. Email, okul ve isim gibi kişisel veriler deneyimi iyileştirmek adına organizatör hesapları ile paylaşılabilir.
        </p>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların izni olmadan kişisel verilerini herhangi bir üçüncü tarafa satmayacak veya kiralamayacaktır. Ancak, kullanıcıların bilgileri, yasal düzenlemeler veya yasal talepler gerektirdiğinde yetkili mercilere verilebilir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Çerezler</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcı aktivitelerini takip etmek için çerezleri kullanır. Kullanıcılar, tarayıcı ayarlarını değiştirerek çerezleri reddedebilir veya çerez kullanımını isteğe bağlı olarak kabul edebilirler.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Veri Güvenliği</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların kişisel verilerinin güvenliği için gerekli teknik ve organizasyonel önlemleri alır. Bunlar arasında şifreleme teknolojileri, güvenlik duvarları ve erişim kontrolü bulunur.
        </p>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların kişisel verilerinin güvenliği için mümkün olan tüm çabayı sarf eder. Ancak, hiçbir veri saklama yöntemi %100 güvenli değildir ve Atolia uygulaması da kişisel verilerin kaybolması, kötüye kullanılması, değiştirilmesi veya ifşa edilmesi gibi olası risklerden tamamen koruyamaz.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Kullanıcıların Hakları</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların kişisel verilerinin doğruluğunu korumak için çaba gösterir. Kullanıcılar, uygulama tarafından saklanan kişisel verilerinin doğruluğunu kontrol etmek ve gerekirse güncellemek için uygulamaya başvurabilirler.
        </p>
        <p className="mb-4">
          Kullanıcılar ayrıca, uygulama tarafından tutulan kişisel verilerinin işlenmesine itiraz etme ve verilerinin silinmesini talep etme haklarına sahiptirler. Kullanıcıların bu haklarını kullanmak için, Atolia uygulamasına başvurmaları yeterlidir.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Gizlilik Politikası Güncellemeleri</h2>
        <p className="mb-4">
          Bu gizlilik politikası, Atolia uygulamasının gizlilik, kişisel veri ve çerez politikasını açıklamak için hazırlanmıştır. Bu politika, zaman zaman güncellenebilir ve değiştirilebilir. Herhangi bir değişiklik yapılması durumunda, kullanıcılara bildirim yapılacak ve değişikliklerin yürürlüğe girdiği tarihte uygulanacaktır.
        </p>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Sonuç</h2>
        <p className="mb-4">
          Atolia uygulaması, kullanıcıların kişisel verilerini korumak ve gizliliklerini sağlamak için gerekli önlemleri alır. Ancak, kullanıcıların da kişisel verilerinin güvenliği için uygun önlemleri alması gerekmektedir. Bu gizlilik politikası, Atolia uygulaması tarafından toplanan ve işlenen kişisel veriler hakkında bilgi sağlamak için hazırlanmıştır ve yalnızca genel bilgilendirme amaçlıdır.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
