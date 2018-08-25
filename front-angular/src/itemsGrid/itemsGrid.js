import gridItem from '../gridItem/gridItem';

class ItemsGridController {
  constructor(ItemDataService) {
    this.$itemService = ItemDataService;
    this.searchData = {};
    this.options = {
      columns: 4,
      minColumns: 1,
      margins: [20, 20],
      rowHeight: 155,
      pushing: true,
      floating: true,
      defaultSizeY: 1,
      defaultSizeX: 1,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: false
      },
    }

    this.fetchItems();
  }

  fetchItems() {
    this.$itemService.query(this.searchData, items => {
      this.items = items;
    });
  }
}

ItemsGridController.$inject = ['ItemDataService'];

const MODULE_NAME = 'itemsGrid';

angular.module(MODULE_NAME, [gridItem])
.component('itemsGrid', {
  template: require('./itemsGrid.html'),
  controller: ItemsGridController
});

export default MODULE_NAME;

