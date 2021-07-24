import React from "react";
import CollectionPreview from "../preview-collection/Preview-collection.component";
import {
  selectCollectionsForPreview,
} from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import "./collections-overview.styles.scss";

const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionOverview);
