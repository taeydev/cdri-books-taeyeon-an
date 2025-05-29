import Text from '@components/common/Text/Text';
import TabBar, { type Tab } from '@layouts/TabBar';
import { HeaderContainer } from './Header.styles';

/**
 * Tab 정보
 */
const tabs: Tab[] = [
  { tabId: 'search', path: '/', label: '도서 검색', defaultTab: true },
  { tabId: 'wishlist', path: '/wishlist', label: '내가 찜한 책' },
];

/**
 * 헤더 영역 컴포넌트
 */
const Header = () => {
  return (
    <HeaderContainer>
      <Text as={'h1'} variant="title1">
        CERTICOS BOOKS
      </Text>
      <TabBar tabs={tabs} />
    </HeaderContainer>
  );
};

export default Header;
