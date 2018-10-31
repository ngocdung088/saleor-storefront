import * as React from "react";

import { ProductListItemInterface } from "../../core/types";

import "./scss/index.scss";

interface ProductListItemProps {
  product: ProductListItemInterface;
}

const ProductListItem: React.SFC<ProductListItemProps> = ({
  product: { name, category, price, thumbnailUrl }
}) => (
  <div className="product-list-item">
    <img src={thumbnailUrl} />
    <h4 className="product-list-item__title">{name}</h4>
    <p className="product-list-item__category">{category.name}</p>
    <p className="product-list-item__price">{price.localized}</p>
  </div>
);

export default ProductListItem;