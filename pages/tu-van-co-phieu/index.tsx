import type { NextPage } from 'next'
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components';
import { useRouter } from 'next/router'
import { Row, Section, Select, Table } from 'sezy-design'

const Title = styled.h1`
font-size: 2.4rem;
margin-bottom: 1.8rem;
color:#2A333D;
`;
const Description = styled.div`
font-size: 1.5rem;
color: #607080;
font-weight:bold;
`;

const FilterSection = styled(Section)`
margin-top:3.5rem;
margin-bottom:3rem;
`;
const SelectWrapper = styled(Row)`
border-radius: 8px;
box-shadow: 0px 4px 12px rgba(55, 66, 77, 0.2);
padding:2rem;
`;

const SelectLabel = styled.div`
font-size: 1rem;
font-weight: 500;
margin-bottom:0.4rem;
`;
const SelectStyled = styled(Select)`
font-size: 1rem;
font-weight: 500;
margin-bottom:0.4rem;
background-color:#F1F3F5;
border-radius: 4px;
`;
const TableSection = styled(Section)`
margin-top:28px;
& > table{
  border-radius: 8px;
  overflow:hidden;
  box-shadow: inset 0px 0px 0px 1px var(--table-border-color);
}
`;




const TuVanCoPhieu: NextPage = () => {
  const router = useRouter()
  return (
    <>
      <Section>
        <Title>TƯ VẤN CỔ PHIẾU TỪ CHUYÊN GIA PHÂN TÍCH HSC</Title>
        <Description>Vui lòng chọn Mã cổ phiếu và Chiều giao dịch bạn quan tâm</Description>
      </Section>
      <FilterSection>
        <SelectWrapper gaps={[1, 1]}>
          <div>
            <SelectLabel>Mã chứng khoán</SelectLabel>
            <SelectStyled placeholder="Tìm mã chứng khoán" size='l' type='flat'>
            </SelectStyled>
          </div>
          <div>
            <SelectLabel>Chiều giao dịch</SelectLabel>
            <SelectStyled ref={React.useRef(null)} placeholder="Tất cả các chiều giao dịch" size='l' type='flat'>
              <div {...{ value: 'all' }}>Tất cả các chiều giao dịch</div>
              <div {...{ value: 'buy' }}>Chiều mua</div>
              <div {...{ value: 'sell' }}>Chiều bán</div>
              <div {...{ value: 'hold' }}>Nắm giữ</div>
            </SelectStyled>
          </div>
          <div>
            <SelectLabel>Thời gian khuyến nghị</SelectLabel>
            <SelectStyled placeholder="Chọn thời gian" size='l' type='flat'>
            </SelectStyled>
          </div>
        </SelectWrapper>
      </FilterSection>
      <TableSection>
        <Table columns={tableColumns} data={tableData} size='l' />
      </TableSection>
    </>
  )
}


const tableColumns = [
  {
    label: 'STT',
    index: 'index',
  },
  {
    label: 'Mã chứng khoán',
    index: 'code',
  },
  {
    label: 'Chiều giao dịch',
    index: 'direction',
  },
  {
    label: 'Khuyến nghị',
    index: 'recommandation',
  },
  {
    label: 'Ngày khuyến nghị',
    index: 'date',
  },
];

const tableData = [
  {
    d1: '1',
    d2: 'data 2',
    d3: 'data 3',
  },
  {
    d1: 'data 1',
    d2: '2',
    d3: 'data 3',
  },
  {
    d1: 'data 1',
    d2: 'data 2',
    d3: '3',
  },
];


export default TuVanCoPhieu
