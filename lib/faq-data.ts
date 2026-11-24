export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "TAI hoạt động trên các hệ điều hành nào?",
    answer:
      "TAI Desktop hiện hỗ trợ chính thức Windows 10 & Windows 11 (64-bit) với cơ chế tự động cập nhật phiên bản mới. Phiên bản dành cho macOS (Apple Silicon & Intel) và Linux (AppImage / Flatpak) đang được phát triển và sẽ sớm ra mắt.",
  },
  {
    question: "TAI có làm chậm máy hay gây giật lag khi xem video 4K 60fps không?",
    answer:
      "Tuyệt đối không. Động cơ lõi của TAI được viết bằng ngôn ngữ Rust và C++ kết hợp tăng tốc phần cứng WebGPU. Bộ nhớ RAM tiêu thụ trung bình chỉ từ 120MB đến 180MB, mức chiếm dụng CPU dưới 3%, đảm bảo máy tính của bạn vận hành êm ái, mát mẻ ngay cả khi vừa xem stream 4K vừa chơi game.",
  },
  {
    question: "Cơ chế AI Terminology Lock hoạt động ra sao? Tôi có thể tự thêm từ điển riêng không?",
    answer:
      "AI Terminology Lock sử dụng thuật ngữ vector kết hợp regex ràng buộc chặt chẽ với mô hình LLM. Bạn có thể chọn sẵn các bộ từ điển có sẵn (Lập trình IT, Trí tuệ nhân tạo, Y học - Dược phẩm, Kinh tế - Chứng khoán) hoặc tự nhập danh sách từ khóa riêng (ví dụ: 'Kubernetes Cluster' -> không dịch, 'Backpropagation' -> Lan truyền ngược) một cách không giới hạn trên gói Pro.",
  },
  {
    question: "Tôi có cần cài đặt thêm Extension vào Chrome hoặc Edge không?",
    answer:
      "Không cần thiết. TAI là ứng dụng Desktop độc lập (Native Desktop App). TAI thu nhận tín hiệu âm thanh hệ thống (System Audio Hook) và vẽ lớp phụ đề nổi (Floating Overlay) trong suốt đè lên bất kỳ trình duyệt hoặc ứng dụng phát video nào mà không can thiệp vào mã nguồn web hay vi phạm chính sách của trình duyệt.",
  },
  {
    question: "TAI có hỗ trợ dịch thuật khi không có kết nối Internet (Offline) không?",
    answer:
      "Có! TAI cung cấp tùy chọn tải mô hình Whisper Edge nhỏ gọn (~480MB) để xử lý hoàn toàn Offline trên thiết bị của bạn. Khi có mạng Internet, TAI tự động kết nối với mạng lưới Cloud Edge để tăng tốc độ phản hồi xuống dưới 150ms và kích hoạt tính năng lồng tiếng Neural Audio Dubbing chất lượng cao.",
  },
  {
    question: "Chính sách dùng thử và hoàn tiền hoạt động như thế nào?",
    answer:
      "Bạn có thể bắt đầu với gói Free Starter trọn đời mà không cần nhập thẻ tín dụng. Khi đăng ký gói Pro Creator, bạn được dùng thử miễn phí 7 ngày với đầy đủ quyền năng. Ngoài ra, TAI cam kết hoàn tiền 100% không cần lý do trong vòng 14 ngày nếu sản phẩm không đáp ứng đúng kỳ vọng của bạn.",
  },
  {
    question: "Làm thế nào để xuất phụ đề sang Notion và tạo thẻ ghi nhớ Anki?",
    answer:
      "Tại thanh công cụ của bảng transcript, bạn chỉ cần bấm nút 'Xuất Notion' để sao chép toàn bộ văn bản song ngữ đã định dạng Markdown kèm mốc thời gian. Hoặc bấm 'Tạo thẻ Anki' để xuất file .apkg tự động phân loại từ mới, câu ví dụ ngữ cảnh và phiên âm phát âm.",
  },
];
