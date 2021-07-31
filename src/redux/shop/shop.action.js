import ShopActionTypes from "./shot.types";

export const updateCollections = (collectionsMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTION,
  payload: collectionsMap,
});
