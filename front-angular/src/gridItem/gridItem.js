class GridItemController {
  constructor(ItemDataService, $window) {
    this.$itemService = ItemDataService;
    this.$window = $window;
  }

  delete() {
    this.$itemService.delete({ id: this.item._id }, () => {
       this.$window.location.reload();
    });
  }
}

GridItemController.$inject = ['ItemDataService', '$window'];

const MODULE_NAME = 'gridItem';
angular.module(MODULE_NAME, [])
  .component('gridItem', {
    template: require('./gridItem.html'),
    controller: GridItemController,
    bindings: {
      item: '='
    }
  });

export default MODULE_NAME;
