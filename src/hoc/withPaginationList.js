import React from "react";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StyledContainer, EmptyState, Pagination } from "../components";
import {useNavigate} from "react-router-dom";

const withPaginationList = (ListComponent, opts) => {

  return (props) => {
    const { label } = opts;

    const [currentPage, setCurrentPage] = React.useState(1);
    const [recordsPerPage] = React.useState(3);

    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = props.listData?.slice(indexOfFirstRecord, indexOfLastRecord);
    const totalPage = Math.ceil(props.listData?.length / recordsPerPage);

    const navigate = useNavigate();

    return (
      <>
        <StyledContainer>
          <Button variant="success" onClick={() => navigate(opts.navAdd)}>
            {label}
          </Button>

          {currentRecords?.length > 0 ? <ListComponent {...props} data={currentRecords} /> : <EmptyState text={`Data ${label} Kosong...`} />}
        </StyledContainer>
        <Pagination totalPage={totalPage} onChangeCurrentPage={setCurrentPage} currentPage={currentPage} />
      </>
    );
  };
};

export default withPaginationList;
