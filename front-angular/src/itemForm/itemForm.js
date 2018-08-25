class ItemFormController {
  constructor(ItemDataService) {
    this.$itemService = ItemDataService;
    this.formData = {};
    this.isEditMode = false;
  }

  fetchItem(id) {
    this.$itemService.get({ id }, data => {
      this.formData = data;
    });
  }

  $routerOnActivate(next) {
    if(next.params.id){
      this.fetchItem(next.params.id);
      this.isEditMode = true;
    }
  }

  submit() {
    let promise;

    if(this.isEditMode) {
      promise = this.formData.$update();
    } else {
      const newItem = new this.$itemService(this.formData);
      promise = newItem.$save();
    }

    promise.then(() => {
      this.$router.navigate(['ItemsGrid']);
    });
  }
}

ItemFormController.$inject = ['ItemDataService'];

const MODULE_NAME = 'itemForm';
angular.module(MODULE_NAME, [])
.component('itemForm', {
  template: require('./itemForm.html'),
  controller: ItemFormController,
  bindings: {
    $router: '<'
  }
});

export default MODULE_NAME;
