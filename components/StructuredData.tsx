import React from "react";

export default function StructuredData() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Translation AI (TAI)",
    operatingSystem: "Windows 10, Windows 11, macOS, Linux",
    applicationCategory: "MultimediaApplication",
    applicationSubCategory: "Real-time YouTube Subtitles & Audio Dubbing",
    offers: [
      {
        "@type": "Offer",
        name: "Free Starter",
        price: "0",
        priceCurrency: "VND",
        description: "Miễn phí 15 giờ dịch thuật video/tháng với phụ đề nổi cơ bản.",
      },
      {
        "@type": "Offer",
        name: "Pro Creator",
        price: "139000",
        priceCurrency: "VND",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "139000",
          priceCurrency: "VND",
          unitText: "tháng (khi thanh toán năm)",
        },
        description:
          "Dịch thuật không giới hạn, độ trễ <180ms, AI Terminology Lock và Audio Dubbing thông minh.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1280",
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "Translation AI Inc.",
      url: "https://translationai.app",
    },
    description:
      "Ứng dụng Desktop dịch thuật YouTube song ngữ theo thời gian thực với độ trễ cực thấp (<200ms), bảo toàn 100% thuật ngữ chuyên ngành IT/Y khoa và thuyết minh giọng đọc AI tự nhiên.",
    featureList: [
      "Real-time YouTube Subtitles with <200ms latency",
      "AI Terminology Lock for IT, Medical & Finance",
      "Neural Audio Dubbing with natural Vietnamese voice",
      "Dual Bilingual Subtitles with 1-click Dictionary Lookup",
      "Lightweight Rust core client consuming <180MB RAM",
      "1-Click Export to Notion and Anki Flashcards",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "TAI hoạt động trên các hệ điều hành nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "TAI hỗ trợ đầy đủ các hệ điều hành máy tính phổ biến hiện nay: Windows 10 & Windows 11 (x64 / ARM64), macOS (tối ưu cho cả chip Apple Silicon M1-M4 và Intel x86), cũng như Linux (AppImage & Flatpak).",
        },
      },
      {
        "@type": "Question",
        name: "TAI có làm chậm máy hay gây giật lag khi xem video 4K 60fps không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tuyệt đối không. Động cơ lõi của TAI được viết bằng ngôn ngữ Rust và C++ kết hợp tăng tốc phần cứng WebGPU. Bộ nhớ RAM tiêu thụ trung bình chỉ từ 120MB đến 180MB, mức chiếm dụng CPU dưới 3%.",
        },
      },
      {
        "@type": "Question",
        name: "Cơ chế AI Terminology Lock hoạt động ra sao? Tôi có thể tự thêm từ điển riêng không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI Terminology Lock sử dụng thuật ngữ vector kết hợp regex ràng buộc chặt chẽ với mô hình LLM. Bạn có thể chọn sẵn các bộ từ điển IT, Y học, Kinh tế hoặc tự nhập danh sách từ khóa riêng không giới hạn trên gói Pro.",
        },
      },
      {
        "@type": "Question",
        name: "Tôi có cần cài đặt thêm Extension vào Chrome hoặc Edge không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Không cần thiết. TAI là ứng dụng Desktop độc lập (Native Desktop App). TAI thu nhận tín hiệu âm thanh hệ thống và vẽ lớp phụ đề nổi trong suốt đè lên bất kỳ trình duyệt nào.",
        },
      },
      {
        "@type": "Question",
        name: "TAI có hỗ trợ dịch thuật khi không có kết nối Internet (Offline) không?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Có. TAI cung cấp tùy chọn tải mô hình Whisper Edge nhỏ gọn (~480MB) để xử lý hoàn toàn Offline trên thiết bị của bạn.",
        },
      },
      {
        "@type": "Question",
        name: "Chính sách dùng thử và hoàn tiền hoạt động như thế nào?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bạn có thể bắt đầu với gói Free Starter trọn đời mà không cần nhập thẻ tín dụng. Khi đăng ký gói Pro Creator, bạn được dùng thử miễn phí 7 ngày và cam kết hoàn tiền 100% trong vòng 14 ngày.",
        },
      },
      {
        "@type": "Question",
        name: "Làm thế nào để xuất phụ đề sang Notion và tạo thẻ ghi nhớ Anki?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tại thanh công cụ của bảng transcript, bạn chỉ cần bấm nút 'Xuất Notion' để sao chép toàn bộ văn bản song ngữ đã định dạng Markdown hoặc bấm 'Tạo thẻ Anki' để xuất file .apkg tự động.",
        },
      },
    ],
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Translation AI (TAI)",
    url: "https://translationai.app",
    logo: "https://translationai.app/icon.png",
    sameAs: [
      "https://github.com/translation-ai",
      "https://twitter.com/translationai",
      "https://discord.gg/translationai",
      "https://youtube.com/@translationai",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}

