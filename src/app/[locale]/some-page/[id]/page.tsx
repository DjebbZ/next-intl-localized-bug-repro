import Link from "next-intl";

export default function SomePage() {
  const t = useTranslations('SomePage');
  return <main>
    <h1>{t('title')}</h1>
    <Link href="/">Go to home page</Link>
  </main>;
}
