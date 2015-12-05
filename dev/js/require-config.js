require.config({
  paths: {
      "mediator": "js/common/mediator",
      "facade": "js/common/facade",
      "loader": "js/common/loader",
      "require": "js/require"
  },
  waitSeconds: 15
});

requirejs(["facade", "loader"], function(facade) {
  facade.publish('loader:refresh');
});