"use client";

import { useState, useId, useMemo, useEffect } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  Car,
  User,
  Phone,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  MapPin,
  RotateCcw,
} from "lucide-react";
import confetti from "canvas-confetti";

interface BookingSystemProps {
  selectedPackage: string;
  onPackageChange: (pkgId: string) => void;
}

export default function BookingSystem({
  selectedPackage,
  onPackageChange,
}: BookingSystemProps) {
  const formUid = useId();

  interface DaySlot {
    id: string;
    formatted: string;
    dayName: string;
    dayNum: number;
    monthName: string;
    badge: string | null;
  }

  const STATIC_DAYS: DaySlot[] = [
    { id: "2026-10-21", formatted: "Wed, Oct 21", dayName: "Wed", dayNum: 21, monthName: "Oct", badge: "Today" },
    { id: "2026-10-22", formatted: "Thu, Oct 22", dayName: "Thu", dayNum: 22, monthName: "Oct", badge: "Tomorrow" },
    { id: "2026-10-23", formatted: "Fri, Oct 23", dayName: "Fri", dayNum: 23, monthName: "Oct", badge: null },
    { id: "2026-10-24", formatted: "Sat, Oct 24", dayName: "Sat", dayNum: 24, monthName: "Oct", badge: null },
    { id: "2026-10-25", formatted: "Sun, Oct 25", dayName: "Sun", dayNum: 25, monthName: "Oct", badge: null },
    { id: "2026-10-26", formatted: "Mon, Oct 26", dayName: "Mon", dayNum: 26, monthName: "Oct", badge: null },
    { id: "2026-10-27", formatted: "Tue, Oct 27", dayName: "Tue", dayNum: 27, monthName: "Oct", badge: null },
  ];

  const [next7Days, setNext7Days] = useState<DaySlot[]>(STATIC_DAYS);
  const [selectedDate, setSelectedDate] = useState<string>("2026-10-21");
  const [selectedSlot, setSelectedSlot] = useState<string>("11:30 AM");

  useEffect(() => {
    const days: DaySlot[] = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      const isToday = i === 0;
      const isTomorrow = i === 1;

      const dayName = d.toLocaleDateString("en-US", { weekday: "short" });
      const dayNum = d.getDate();
      const monthName = d.toLocaleDateString("en-US", { month: "short" });
      const fullDate = d.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      });

      days.push({
        id: d.toISOString().split("T")[0],
        formatted: fullDate,
        dayName,
        dayNum,
        monthName,
        badge: isToday ? "Today" : isTomorrow ? "Tomorrow" : null,
      });
    }
    setNext7Days(days);
    if (days[0]) {
      setSelectedDate(days[0].id);
    }
  }, []);

  // Customer Form State
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  const packagesInfo: Record<
    string,
    { name: string; price: string; duration: string }
  > = {
    essential: {
      name: "Basic Detail",
      price: "Rs 35,000",
      duration: "6–8 Hours",
    },
    showroom: {
      name: "Standard Signature",
      price: "Rs 75,000",
      duration: "24–36 Hours",
    },
    armor: {
      name: "Premium Armor PPF",
      price: "Rs 185,000",
      duration: "3–5 Days",
    },
  };

  const timeSlots = [
    { time: "09:30 AM", period: "Morning Slot", disabledDays: [1, 3] },
    { time: "11:30 AM", period: "Prime Inspection", disabledDays: [2] },
    { time: "02:00 PM", period: "Afternoon Bay", disabledDays: [0, 4] },
    { time: "04:00 PM", period: "Afternoon Bay", disabledDays: [] },
    { time: "06:00 PM", period: "Twilight Drop-off", disabledDays: [1, 5] },
  ];

  const isSlotTaken = (slotTime: string) => {
    const dayIndex = next7Days.findIndex((d) => d.id === selectedDate);
    const slot = timeSlots.find((s) => s.time === slotTime);
    if (!slot) return false;
    return slot.disabledDays.includes(dayIndex % 6);
  };

  const handleDateSelect = (dateId: string) => {
    setSelectedDate(dateId);
    const taken = timeSlots.find(
      (s) =>
        s.time === selectedSlot &&
        s.disabledDays.includes(next7Days.findIndex((d) => d.id === dateId) % 6)
    );
    if (taken) {
      const firstAvailable = timeSlots.find(
        (s) => !s.disabledDays.includes(next7Days.findIndex((d) => d.id === dateId) % 6)
      );
      if (firstAvailable) {
        setSelectedSlot(firstAvailable.time);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!phone.trim() || phone.replace(/\D/g, "").length < 9) {
      setErrorMsg("Please provide a valid contact number.");
      return;
    }
    if (!vehicle.trim()) {
      setErrorMsg("Please enter your vehicle make & model.");
      return;
    }

    setErrorMsg("");
    const randomCode = `ABJ-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(randomCode);
    setIsSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#0077EE", "#38bdf8", "#0f172a"],
      });
    } catch {
      // ignore
    }
  };

  const selectedDateObj = next7Days.find((d) => d.id === selectedDate);
  const activePackageData = packagesInfo[selectedPackage] || packagesInfo.showroom;

  const whatsappUrl = useMemo(() => {
    const text = `Salam ABJ Detailing! ✨\nI would like to book a detailing slot:\n\n• Reference: ${bookingRef}\n• Package: *${activePackageData.name}* (${activePackageData.price})\n• Date: *${selectedDateObj?.formatted}*\n• Slot: *${selectedSlot}*\n• Vehicle: *${vehicle}*\n• Name: *${fullName}*\n• Phone: ${phone}${notes ? `\n• Notes: ${notes}` : ""}\n\nPlease confirm my studio bay at Melody Market, G-6 Islamabad.`;
    return `https://wa.me/923161616253?text=${encodeURIComponent(text)}`;
  }, [
    bookingRef,
    activePackageData,
    selectedDateObj,
    selectedSlot,
    vehicle,
    fullName,
    phone,
    notes,
  ]);

  const handleReset = () => {
    setIsSubmitted(false);
    setBookingRef("");
  };

  return (
    <section id="booking" className="py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        {/* Section Heading matching reference layout */}
        <div className="text-center mb-12">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight text-slate-900">
            ONLINE RESERVATION
          </h2>
          <div className="w-12 h-1 bg-[#0077EE] mx-auto mt-2 rounded-full" />
          <p className="text-slate-500 text-sm mt-3">
            Pick your date and time slot to lock in your detailing bay.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl bg-[#F8FAFC] border border-slate-200/90 p-6 sm:p-10 shadow-sm">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Package Selection */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0077EE] text-white font-bold text-xs flex items-center justify-center">
                      1
                    </span>
                    <span>Select Package</span>
                  </label>
                  <span className="text-xs text-[#0077EE] font-bold">
                    {activePackageData.name} ({activePackageData.price})
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {(["essential", "showroom", "armor"] as const).map((pkgKey) => {
                    const pkg = packagesInfo[pkgKey];
                    const isSelected = selectedPackage === pkgKey;
                    return (
                      <button
                        type="button"
                        key={pkgKey}
                        onClick={() => onPackageChange(pkgKey)}
                        className={`p-4 rounded-2xl text-left border transition-all duration-200 relative ${
                          isSelected
                            ? "bg-white border-[#0077EE] shadow-md ring-1 ring-[#0077EE]"
                            : "bg-white/60 border-slate-200 hover:border-slate-300 hover:bg-white"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-3 right-3">
                            <CheckCircle2 className="w-4 h-4 text-[#0077EE]" />
                          </div>
                        )}
                        <p className="font-heading font-bold text-sm text-slate-900">
                          {pkg.name}
                        </p>
                        <p className="text-xs font-bold text-[#0077EE] mt-1">
                          {pkg.price}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {pkg.duration}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Next 7 Days Date Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0077EE] text-white font-bold text-xs flex items-center justify-center">
                      2
                    </span>
                    <span>Select Date</span>
                  </label>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedDateObj?.formatted}
                  </span>
                </div>

                <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                  {next7Days.map((d) => {
                    const isSelected = selectedDate === d.id;
                    return (
                      <button
                        type="button"
                        key={d.id}
                        onClick={() => handleDateSelect(d.id)}
                        className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center border transition-all duration-200 relative ${
                          isSelected
                            ? "bg-[#0077EE] border-[#0077EE] text-white shadow-md"
                            : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                        }`}
                      >
                        {d.badge && (
                          <span
                            className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] font-black uppercase px-1.5 py-0.2 rounded ${
                              isSelected ? "bg-white text-[#0077EE]" : "bg-slate-900 text-white"
                            }`}
                          >
                            {d.badge}
                          </span>
                        )}
                        <span className="text-[10px] font-bold uppercase">
                          {d.dayName}
                        </span>
                        <span className="font-heading font-black text-lg my-0.5">
                          {d.dayNum}
                        </span>
                        <span className="text-[9px] uppercase">
                          {d.monthName}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Studio Time Slots */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-[#0077EE] text-white font-bold text-xs flex items-center justify-center">
                      3
                    </span>
                    <span>Select Time Slot</span>
                  </label>
                  <span className="text-xs text-slate-500 font-medium">
                    {selectedSlot}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {timeSlots.map((slot) => {
                    const taken = isSlotTaken(slot.time);
                    const isSelected = selectedSlot === slot.time && !taken;

                    return (
                      <button
                        type="button"
                        key={slot.time}
                        disabled={taken}
                        onClick={() => setSelectedSlot(slot.time)}
                        className={`p-3 rounded-2xl text-left border transition-all duration-200 ${
                          taken
                            ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed opacity-60"
                            : isSelected
                            ? "bg-[#0077EE] border-[#0077EE] text-white shadow-md"
                            : "bg-white border-slate-200 text-slate-700 hover:border-slate-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-heading font-bold text-sm">
                            {slot.time}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-medium mt-1 block ${
                            isSelected ? "text-white/80" : "text-slate-400"
                          }`}
                        >
                          {taken ? "Booked" : slot.period}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Contact & Vehicle Form */}
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <label className="text-xs font-heading font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#0077EE] text-white font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <span>Vehicle &amp; Contact Credentials</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Syed Murtaza"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0077EE] focus:ring-1 focus:ring-[#0077EE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0316 1616253"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0077EE] focus:ring-1 focus:ring-[#0077EE]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Vehicle Model *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Civic RS / Prado / Macan"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-[#0077EE] focus:ring-1 focus:ring-[#0077EE]"
                    />
                  </div>
                </div>

                {errorMsg && (
                  <p className="text-xs text-red-500 font-semibold">{errorMsg}</p>
                )}

                <div className="pt-2 flex justify-end">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#0077EE] hover:bg-[#0066cc] text-white font-heading font-black text-xs uppercase tracking-wider shadow-md hover:scale-[1.02] transition-all"
                  >
                    Confirm &amp; Lock Detailing Bay
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <p className="text-xs font-heading font-bold uppercase tracking-wider text-[#0077EE]">
                  Reservation Code: {bookingRef}
                </p>
                <h3 className="font-heading font-black text-2xl text-slate-900 mt-1">
                  Detailing Slot Reserved!
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {selectedDateObj?.formatted} at {selectedSlot} • {vehicle}
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-heading font-bold text-xs uppercase tracking-wider"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>New Booking</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
