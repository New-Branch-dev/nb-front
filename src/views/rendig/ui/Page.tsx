import Link from "next/link";

import { FirstSection } from "./components/FirstSection";
import {
  pageFooter,
  pageFooterLink,
  pageFooterNavList,
  pageFooterTitle,
  rendigPage,
} from "./Page.css";

export const RendigPage = () => {
  return (
    <section className={rendigPage}>
      <FirstSection />
      <footer className={pageFooter}>
        <section aria-label="푸터 브랜드 정보">
          <h2 className={pageFooterTitle}>뉴브랜치</h2>
        </section>

        <nav aria-label="푸터 링크">
          <ul className={pageFooterNavList}>
            <li>
              <Link href="/" className={pageFooterLink}>
                개인정보처리방침
              </Link>
            </li>
            <li>
              <Link href="/" className={pageFooterLink}>
                이용약관
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </section>
  );
};
