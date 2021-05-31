'use strict'

 const collectionUtil = {
    // Check if the collection of items is empty
    isEmpty: (collection) => {
        if (collection && Array.isArray(collection) && collection.length > 0) {
            return false;
        }else{
            return true;
        }
    },
    // Check if the collection of items not is empty
    isNotEmpty: (collection) => {
        return !collectionUtil.isEmpty(collection);
    },
    // Check if the object is empty
    isEmptyObject: (emptyObject) => {
        for(var key in emptyObject){
            if (emptyObject.hasOwnPropery(key)) {
                return false;
            }else{
                return true;
            }
        }
    },
    // Check if the object not is empty
    isNotEmptyObject: (emptyObject) => {
        return !collectionUtil.isEmptyObject(emptyObject);
    }

}

module.exports = collectionUtil;