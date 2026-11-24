export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: "TAI Desktop hoạt động trên những hệ điều hành nào?",
    answer:
      "TAI Desktop hiện hỗ trợ chính thức Windows 10 & Windows 11 (64-bit) với cơ chế kiểm tra và cập nhật phiên bản mới tự động ngay trong ứng dụng. Phiên bản dành cho macOS và Linux đang được lên kế hoạch phát triển và sẽ sớm ra mắt.",
  },
  {
    question: "Tại sao tôi có thể nghe lồng tiếng ngay mà không cần chờ xử lý hết cả video YouTube?",
    answer:
      "TAI Desktop xử lý dịch thuật và tạo giọng đọc theo từng phân đoạn khoảng 45 giây kết hợp tải trước 30 giây / 12 câu thoại tiếp theo. Nhờ vậy video bắt đầu phát gần như ngay lập tức và khi bạn tua đến bất kỳ mốc thời gian nào, hệ thống tự động dịch ngay đoạn đó.",
  },
  {
    question: "TAI đồng bộ giọng lồng tiếng với video như thế nào để không bị chồng tiếng hay giật âm lượng?",
    answer:
      "Bộ máy phát của TAI sử dụng thuật toán 3-cue lookahead nhìn trước 3 câu thoại kế tiếp để tự điều chỉnh nhịp tốc độ giọng đọc và tốc độ video mượt mà (giữ nguyên cao độ preservesPitch), kết hợp Audio Ducking 4 chế độ giúp hạ tiếng gốc êm dịu không bị giật cục.",
  },
  {
    question: "TAI hỗ trợ bao nhiêu ngôn ngữ và chất lượng giọng đọc ra sao?",
    answer:
      "TAI Desktop hỗ trợ 42 ngôn ngữ với hệ thống giọng đọc Neural TTS tự nhiên, cho phép bạn chọn ngôn ngữ đích và giọng đọc yêu thích trực tiếp ngay trên thanh điều khiển của trình phát.",
  },
  {
    question: "Tôi có cần cài thêm Extension vào Chrome hay Edge không?",
    answer:
      "Không cần. TAI Desktop là ứng dụng Windows độc lập tích hợp sẵn trình phát YouTube, đi kèm lớp phụ đề song ngữ nổi có thể kéo thả vị trí, tự co cỡ chữ và bảng Transcript cho phép bấm vào từng câu để tua nhanh.",
  },
  {
    question: "Gói Free và quy trình nâng cấp Pro / Team hoạt động như thế nào?",
    answer:
      "Khi mở TAI Desktop và đăng ký tài khoản mới, hệ thống tự động tạo không gian cá nhân và kích hoạt gói Free với hạn mức phút lồng tiếng mỗi tháng (không cần thẻ tín dụng). Bạn có thể xem tiến độ sử dụng theo thời gian thực và gửi yêu cầu nâng cấp lên gói Pro hoặc Team (Tenant nhiều thành viên) trực tiếp trong ứng dụng.",
  },
  {
    question: "TAI Desktop hỗ trợ những nền tảng video nào?",
    answer:
      "TAI Desktop được thiết kế và tối ưu chuyên sâu cho YouTube ngay trong trình phát tích hợp của ứng dụng. Bạn chỉ cần mở ứng dụng, duyệt YouTube hoặc dán đường dẫn video để bật phụ đề song ngữ và lồng tiếng AI tức thì.",
  },
];
