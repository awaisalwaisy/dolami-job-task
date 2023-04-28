type Tag = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface ItemAuthor {
  name: string;
  avatarUrl: string;
}

interface ItemLikes {
  readonly count: number;
  like: boolean;
}

interface ItemData {
  readonly id: number | string;
  readonly title: string;
  readonly imgUrl: string;
  readonly feedback: {
    readonly rating: number;
    readonly likes: ItemLikes;
  };
  readonly info: {
    readonly author: ItemAuthor;
    readonly price: number;
  };
  readonly note: {
    readonly tag: string;
    readonly feature: string;
    readonly shareId?: string;
  };
}

interface GlobalStore {
  searchTitle: string | null;
  setSearchTitle: (title: string) => void;
  isCartDrawer: boolean;
  setCartDrawer: (isCartDrawer: boolean) => void;
}
