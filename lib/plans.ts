import { getReleaseBaseUrl } from "./release";

export interface PlanDto {
  id: number;
  code: string;
  name: string;
  description: string | null;
  badge: string | null;
  priceMonthly: number;
  priceYearly: number;
  currency: string;
  monthlyMinutesLimit: number | null;
  maxSeats: number;
  features: string[];
  isPublic: boolean;
  isDefault: boolean;
  isHighlighted: boolean;
  sortOrder: number;
  isActive: boolean;
}

interface PlansEnvelope {
  statusCode?: number;
  status?: string;
  message?: string;
  data?: unknown;
}

export const FALLBACK_PLANS: PlanDto[] = [
  {
    id: 1,
    code: "free",
    name: "Free",
    description: "Tự động kích hoạt khi đăng ký tài khoản ngay trong TAI Desktop.",
    badge: "Miễn phí",
    priceMonthly: 0,
    priceYearly: 0,
    currency: "VND",
    monthlyMinutesLimit: 60,
    maxSeats: 1,
    features: [
      "60 phút lồng tiếng AI mỗi tháng",
      "Trình phát YouTube tích hợp trên Windows 10/11",
      "42 ngôn ngữ & giọng đọc Neural TTS tự nhiên",
      "Dịch phân đoạn ~45s + tải trước 30s / 12 câu",
      "Phụ đề song ngữ nổi kéo thả + bảng Transcript bấm để tua",
      "Audio Ducking 4 chế độ & đồng bộ 3-cue lookahead",
    ],
    isPublic: true,
    isDefault: true,
    isHighlighted: false,
    sortOrder: 1,
    isActive: true,
  },
  {
    id: 2,
    code: "pro",
    name: "Pro",
    description: "Dành cho người học ngoại ngữ, lập trình viên và người xem YouTube chuyên sâu.",
    badge: "Phổ biến nhất",
    priceMonthly: 99000,
    priceYearly: 950000,
    currency: "VND",
    monthlyMinutesLimit: 600,
    maxSeats: 1,
    features: [
      "600 phút lồng tiếng AI mỗi tháng (~10 giờ video)",
      "Đầy đủ 42 ngôn ngữ & giọng đọc Neural TTS giữ cao độ",
      "Dịch phân đoạn ~45s, tua tới đâu dịch tới đó",
      "Đồng bộ âm thanh – video 3-cue lookahead mượt mà",
      "Audio Ducking 4 chế độ không giật âm lượng",
      "Theo dõi hạn mức trực tiếp & yêu cầu nâng cấp trong app",
    ],
    isPublic: true,
    isDefault: false,
    isHighlighted: true,
    sortOrder: 2,
    isActive: true,
  },
  {
    id: 3,
    code: "team",
    name: "Team",
    description: "Không gian làm việc chung (Tenant) dành cho đội nhóm học tập & nghiên cứu.",
    badge: "Đội nhóm",
    priceMonthly: 299000,
    priceYearly: 2890000,
    currency: "VND",
    monthlyMinutesLimit: 3000,
    maxSeats: 5,
    features: [
      "3.000 phút lồng tiếng AI dùng chung mỗi tháng (~50 giờ)",
      "Quản lý thành viên trong cùng không gian Tenant",
      "Đầy đủ tính năng trình phát YouTube & phụ đề song ngữ",
      "42 ngôn ngữ Neural TTS + đồng bộ 3-cue lookahead",
      "Phân quyền Owner / Admin / Member linh hoạt",
      "Hỗ trợ kích hoạt và gia hạn trực tiếp từ quản trị viên",
    ],
    isPublic: true,
    isDefault: false,
    isHighlighted: false,
    sortOrder: 3,
    isActive: true,
  },
];

function isValidPlan(item: unknown): item is PlanDto {
  if (!item || typeof item !== "object") return false;
  const r = item as Record<string, unknown>;
  return (
    typeof r.id === "number" &&
    typeof r.code === "string" &&
    typeof r.name === "string" &&
    typeof r.priceMonthly === "number" &&
    typeof r.priceYearly === "number"
  );
}

function normalizePlan(raw: PlanDto): PlanDto {
  return {
    id: raw.id,
    code: raw.code,
    name: raw.name,
    description: typeof raw.description === "string" ? raw.description : null,
    badge: typeof raw.badge === "string" && raw.badge.trim() ? raw.badge.trim() : null,
    priceMonthly: Number.isFinite(raw.priceMonthly) ? raw.priceMonthly : 0,
    priceYearly: Number.isFinite(raw.priceYearly) ? raw.priceYearly : 0,
    currency: typeof raw.currency === "string" && raw.currency.trim() ? raw.currency.trim() : "VND",
    monthlyMinutesLimit:
      typeof raw.monthlyMinutesLimit === "number" && Number.isFinite(raw.monthlyMinutesLimit)
        ? raw.monthlyMinutesLimit
        : null,
    maxSeats: typeof raw.maxSeats === "number" && raw.maxSeats > 0 ? raw.maxSeats : 1,
    features: Array.isArray(raw.features)
      ? raw.features.filter((f): f is string => typeof f === "string" && f.trim().length > 0)
      : [],
    isPublic: raw.isPublic !== false,
    isDefault: Boolean(raw.isDefault),
    isHighlighted: Boolean(raw.isHighlighted),
    sortOrder: typeof raw.sortOrder === "number" ? raw.sortOrder : 0,
    isActive: raw.isActive !== false,
  };
}

export function formatCurrency(amount: number, currency = "VND"): string {
  const rounded = Math.max(0, Math.round(amount));
  const formatted = String(rounded).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  if (currency.toUpperCase() === "VND") {
    return `${formatted}đ`;
  }
  return `${formatted} ${currency.toUpperCase()}`;
}

export function formatMinutesLimit(minutes: number | null): string {
  if (minutes === null) return "Không giới hạn";
  const formatted = String(Math.max(0, Math.round(minutes))).replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  );
  return `${formatted} phút / tháng`;
}

export function getMonthlyEquivalentPrice(plan: PlanDto, isYearly: boolean): number {
  if (plan.priceMonthly <= 0 && plan.priceYearly <= 0) return 0;
  if (isYearly && plan.priceYearly > 0) {
    return Math.round(plan.priceYearly / 12);
  }
  return plan.priceMonthly;
}

export function getYearlySavingsPercent(plan: PlanDto): number {
  if (plan.priceMonthly <= 0 || plan.priceYearly <= 0) return 0;
  const fullYear = plan.priceMonthly * 12;
  if (plan.priceYearly >= fullYear) return 0;
  return Math.round(((fullYear - plan.priceYearly) / fullYear) * 100);
}

export async function fetchPublicPlans(options?: {
  baseUrl?: string;
  timeoutMs?: number;
}): Promise<PlanDto[]> {
  const baseUrl = (options?.baseUrl || getReleaseBaseUrl()).replace(/\/+$/, "");
  const timeoutMs = options?.timeoutMs ?? 5000;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const res = await fetch(`${baseUrl}/api/v1/public/plans`, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (!res.ok) {
      return FALLBACK_PLANS;
    }

    const body: unknown = await res.json();
    let rawList: unknown[] | null = null;
    if (Array.isArray(body)) {
      rawList = body;
    } else if (body && typeof body === "object") {
      const dataField = (body as PlansEnvelope).data;
      if (Array.isArray(dataField)) {
        rawList = dataField;
      }
    }

    if (!rawList) {
      return FALLBACK_PLANS;
    }

    const parsed = rawList
      .filter(isValidPlan)
      .map(normalizePlan)
      .filter((plan) => plan.isPublic && plan.isActive)
      .sort((a, b) => a.sortOrder - b.sortOrder || a.id - b.id);

    return parsed.length > 0 ? parsed : FALLBACK_PLANS;
  } catch {
    return FALLBACK_PLANS;
  } finally {
    clearTimeout(timeoutId);
  }
}
