import { Component } from "react";
import Pagination from "react-bootstrap/Pagination";
import PropTypes from "prop-types";

class CustomPagination extends Component {
  render() {
    console.log("Pagination -render");
    const { itemsCount, pageSize, currentPage, onPageChange } = this.props;
    const pagesCount = Math.ceil(itemsCount / pageSize);
    if (pagesCount <= 1) return null;

    const createPaginations = () => {
      const newArr = [];
      for (let page = 1; page <= pagesCount; page++)
        newArr.push(
          <Pagination.Item
            active={page === currentPage}
            onClick={() => onPageChange(page)}
            key={page}
          >
            {page}
          </Pagination.Item>
        );

      return newArr;
    };

    return <Pagination>{createPaginations()}</Pagination>;
  }
}

CustomPagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default CustomPagination;
