import { motion } from "motion/react";

import {
  Paperclip,
  ScrollText,
  ShieldCheck,
  FileCheck2,
} from "lucide-react";

export function FeatureVisual({ kind }: { kind: "chart" | "flow" | "roles" | "audit" }) {
  return (
    <div className="rounded-3xl border border-border bg-light-gray p-5 shadow-card">
      <div className="rounded-2xl border border-border bg-card p-5">
        {kind === "chart" && (
          <div>
            <p className="text-xs font-bold text-navy">Budget absorption by department</p>
            <div className="mt-5 space-y-3.5">
              {[
                ["Health", 82],
                ["Education", 64],
                ["Public Works", 51],
                ["Administration", 73],
              ].map(([l, v]) => (
                <div key={l as string}>
                  <div className="flex justify-between text-[11px] text-dark-gray">
                    <span>{l}</span>
                    <span className="font-semibold text-navy">{v}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-light-gray">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${v}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-2 rounded-full bg-lime-brand"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {kind === "flow" && (
          <div>
            <p className="text-xs font-bold text-navy">Requisition #RQ-2291</p>
            <ol className="mt-5 space-y-4">
              {[
                ["Raised · Stores Officer", true],
                ["Verified · HOD Health", true],
                ["Budget check · Finance", true],
                ["Approval · Accounting Officer", false],
              ].map(([l, done], i, a) => (
                <li key={l as string} className="relative flex gap-3 pl-1">
                  <span
                    className={
                      done
                        ? "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-lime-brand text-[10px] font-bold text-navy"
                        : "mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-dashed border-blue-brand text-[10px] font-bold text-blue-brand"
                    }
                  >
                    {i + 1}
                  </span>
                  {i < a.length - 1 && (
                    <span className="absolute left-[13px] top-6 h-6 w-px bg-border" aria-hidden />
                  )}
                  <span className="text-[12px] text-foreground">{l}</span>
                </li>
              ))}
            </ol>
          </div>
        )}

        {kind === "roles" && (
          <div>
            <p className="text-xs font-bold text-navy">Role permissions</p>
            <div className="mt-4 overflow-hidden rounded-xl border border-border">
              <table className="w-full text-[11px]">
                <thead className="bg-light-gray text-dark-gray">
                  <tr>
                    <th className="px-3 py-2 text-left font-semibold">Role</th>
                    <th className="px-3 py-2 font-semibold">View</th>
                    <th className="px-3 py-2 font-semibold">Post</th>
                    <th className="px-3 py-2 font-semibold">Approve</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Stores Officer", true, true, false],
                    ["Accountant", true, true, false],
                    ["HOD", true, false, true],
                    ["Auditor", true, false, false],
                  ].map((r) => (
                    <tr key={r[0] as string} className="border-t border-border">
                      <td className="px-3 py-2 font-medium text-navy">{r[0]}</td>
                      {r.slice(1).map((c, ci) => (
                        <td key={ci} className="px-3 py-2 text-center">
                          <span
                            className={
                              c
                                ? "inline-block h-2.5 w-2.5 rounded-full bg-lime-brand"
                                : "inline-block h-2.5 w-2.5 rounded-full bg-border"
                            }
                            aria-label={c ? "allowed" : "denied"}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {kind === "audit" && (
          <div>
            <p className="text-xs font-bold text-navy">Audit trail · Voucher PV-1183</p>
            <ul className="mt-4 space-y-3">
              {[
                { t: "09:12", l: "Created by J. Otieno", I: ScrollText },
                { t: "10:04", l: "Attachment added (2 files)", I: Paperclip },
                { t: "11:47", l: "Budget verified by Finance", I: FileCheck2 },
                { t: "14:20", l: "Approved by Accounting Officer", I: ShieldCheck },
              ].map(({ t, l, I }) => (
                <li key={t} className="flex items-center gap-3 text-[11px]">
                  <span className="w-9 shrink-0 font-mono text-dark-gray">{t}</span>
                  <I className="h-3.5 w-3.5 shrink-0 text-blue-brand" aria-hidden />
                  <span className="min-w-0 truncate text-foreground">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}