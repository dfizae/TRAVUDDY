export interface GnbMenuItem {
  img_src: string;
  img_alt: string;
  title: string;
}

export const GnbMenuData: GnbMenuItem[] = [
  {
    img_src: '/images/icons/ico-search.svg',
    img_alt: 'Explore 아이콘',
    title: "Explore",
  },
  {
    img_src: '/images/icons/ico-map.svg',
    img_alt: 'Map 아이콘',
    title: "Map",
  },
  {
    img_src: '/images/icons/ico-bookmark.svg',
    img_alt: '위시리스트 아이콘',
    title: "Wishlist",
  },
  {
    img_src: '/images/icons/ico-mytrip.svg',
    img_alt: '마잍트립 아이콘',
    title: "My Trip",
  },
  {
    img_src: '/images/icons/ico-messages.svg',
    img_alt: '메신저 Icon',
    title: "Messages",
  },
];