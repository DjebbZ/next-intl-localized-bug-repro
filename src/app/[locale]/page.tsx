import {useTranslations} from 'next-intl';
import { Link } from "@/i18n/navigation";

export default function IndexPage() {
  const t = useTranslations('IndexPage');
  return <main>
    <h1>{t('title')}</h1>
    <Link href={`some-page/${1}`}>Go to some-page/1</Link>
  </main>;
}
