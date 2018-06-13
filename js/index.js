var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function PostButton(props) {
  var style = {
    width: 25,
    height: 25
  };
  return React.createElement(
    "button",
    { style: style },
    props.label
  );
}

function PostText1(props) {
  var style = {
    border: "1px solid black",
    padding: "0px 15px 0px 15px"
  };
  return React.createElement(
    "div",
    { style: style },
    props.text
  );
}

function PostText2(props) {
  var style = {
    border: "1px solid black",
    padding: "0px 15px 0px 15px"
  };
  return React.createElement(
    "div",
    { style: style },
    props.text
  );
}

function Post(props) {
  var style = {
    display: "flex"
  };
  return React.createElement(
    "div",
    { style: style },
    React.createElement(PostButton, { label: "X", handleClick: props.removeItem }),
    React.createElement(PostText1, { text: props.firstname }),
    React.createElement(PostText2, { text: props.lastname }),
    React.createElement(PostText2, { text: props.activity }),
    React.createElement(PostText2, { text: props.option })
  );
}

function PostList(props) {
  return React.createElement(
    "ol",
    null,
    props.postList.map(function (item, index) {
      return React.createElement(Post, { key: index,
        firstname: item.firstname,
        lastname: item.lastname,
        activity: item.activity,
        option: item.option,
        removeItem: function removeItem() {
          return props.removeItem(index);
        }
      });
    })
  );
}

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { firstNameValue: "", lastNameValue: "", activities: [], value: 'option1', items: [] };
    _this.handleChangeOption = _this.handleChangeOption.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleChangeFirstName",
    value: function handleChangeFirstName(event) {
      this.setState({ firstNameValue: event.target.value });
      console.log(this.state.firstNameValue);
    }
  }, {
    key: "handleChangeLastName",
    value: function handleChangeLastName(event) {
      this.setState({ lastNameValue: event.target.value });
      console.log(this.state.firstNameValue);
    }
  }, {
    key: "handleChangeCheckedBoxActivity1",
    value: function handleChangeCheckedBoxActivity1(event) {
      this.setState({ activity1: event.target.value });
      console.log(this.state.activity1);
    }
  }, {
    key: "handleChangeCheckedBoxActivity2",
    value: function handleChangeCheckedBoxActivity2(event) {
      this.setState({ activity2: event.target.value });
      console.log(this.state.activity2);
    }
  }, {
    key: "handleChangeCheckedBoxActivity3",
    value: function handleChangeCheckedBoxActivity3(event) {
      this.setState({ activity3: event.target.value });
      console.log(this.state.activity3);
    }
  }, {
    key: "handleChangeOption",
    value: function handleChangeOption(event) {
      this.setState({ value: event.target.value });
      console.log(value);
    }
  }, {
    key: "addItem",
    value: function addItem() {
      var itemsCopy = this.state.items.slice();
      var truncatedFirst = this.state.firstNameValue.substring(0, 20);
      var truncatedLast = this.state.lastNameValue.substring(0, 20);

      var activitiesCopy = this.state.activities.slice();
      var activity1 = this.state.activity1;
      activitiesCopy.push(activity1);
      var activity2 = this.state.activity2;
      activitiesCopy.push(activity2);
      var activity3 = this.state.activity3;
      activitiesCopy.push(activity3);

      var option = this.state.value;
      console.log(option);

      itemsCopy.push({ "firstname": truncatedFirst, "lastname": truncatedLast, "activity": activitiesCopy, "option": option });
      this.setState({ items: itemsCopy, firstNameValue: "", lastNameValue: "", activity: "", option: "" });
      console.log(itemsCopy);
    }
  }, {
    key: "removeItem",
    value: function removeItem(index) {
      var itemsCopy = this.state.items.slice();
      itemsCopy.splice(index, 1);
      this.setState({ items: itemsCopy, firstNameValue: "", lastNameValue: "", activity: "", option: "" });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return React.createElement(
        "div",
        null,
        React.createElement(
          "div",
          null,
          React.createElement("input", { firstNameValue: this.state.firstNameValue, onChange: this.handleChangeFirstName.bind(this) })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("input", { lastNameValue: this.state.lastNameValue, onChange: this.handleChangeLastName.bind(this) })
        ),
        React.createElement(
          "div",
          null,
          React.createElement("input", { type: "checkbox", value: "a", onChange: this.handleChangeCheckedBoxActivity1.bind(this) }),
          "Dietary Restrictions"
        ),
        React.createElement(
          "div",
          null,
          React.createElement("input", { type: "checkbox", value: "b", onChange: this.handleChangeCheckedBoxActivity2.bind(this) }),
          "Physical Disabilities"
        ),
        React.createElement(
          "div",
          null,
          React.createElement("input", { type: "checkbox", value: "c", onChange: this.handleChangeCheckedBoxActivity3.bind(this) }),
          "Medical Needs"
        ),
        React.createElement(
          "select",
          { value: this.state.value, onChange: this.handleChangeOption },
          React.createElement(
            "option",
            { value: "Science Lab" },
            "Science Lab"
          ),
          React.createElement(
            "option",
            { value: "Swimming" },
            "Swimming"
          ),
          React.createElement(
            "option",
            { value: "Cooking" },
            "Cooking"
          ),
          React.createElement(
            "option",
            { value: "Painting" },
            "Painting"
          )
        ),
        React.createElement(
          "div",
          null,
          React.createElement(
            "button",
            { onClick: function onClick() {
                return _this2.addItem();
              } },
            "Submit"
          )
        ),
        React.createElement(PostList, { postList: this.state.items, removeItem: this.removeItem.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));