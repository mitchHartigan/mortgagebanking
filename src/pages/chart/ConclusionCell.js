import React from "react";
import styled from "styled-components";

export function ConclusionCell(props) {
  const { column, row, conclusionData } = props;

  function hasSameProperties(obj1, obj2) {
    return Object.keys(obj1).every(function (property) {
      if (typeof obj1[property] !== "object") {
        return obj2.hasOwnProperty(property);
      } else {
        return hasSameProperties(obj1[property], obj2[property]);
      }
    });
  }

  const schema = {
    name: "Collateral Type",
    type: "criteria",
    data: [
      {
        name: "Broker",
        type: "criteria",
        data: [
          { name: "Commercial/Multifamily", type: "criteria" },
          { name: "Residential 1-4 Business Purpose", type: "criteria" },
        ],
      },
      {
        name: "Lender",
        type: "criteria",
        data: [
          { name: "Commercial/Multifamily", type: "criteria" },
          { name: "Residential 1-4 Business Purpose", type: "criteria" },
        ],
      },
    ],
  };

  const dataset = {
    name: "Company License",
    type: "conclusion",
    data: [
      {
        name: "Broker",
        type: "criteria",
        data: [
          {
            name: "Commercial/Multifamily",
            type: "conclusion",
            body: {
              description:
                "Defined conduct appears to be outside the scope of Alaska Secure and Fair Enforcement for Mortgage Licensing Act of 2010 and the Alaska Real Estate Broker law",
              citation:
                "Unless exempt from licensing… a person must be licensed by the department as a mortgage licensee to operate in the state as a mortgage broker or mortgage lender with respect to a dwelling or residential real estate in the state.” Alaska Admin. Code tit. 3, § 14.010 (Emphasis added); See Alaska Stat. § 06.60.010(a). A mortgage broker “arranges with a variety of lending sources, including private lenders, institutional investors, or wholesale lenders, to provide financing for mortgage loans; or assists or offers to assist a borrower or potential borrower to obtain financing for a mortgage loan,” where a “mortgage loan” is a “residential mortgage loan” and a “residential mortgage loan” is “primarily for personal, family, or household use” and secured by a security interest on a dwelling or residential real estate located in Alaska. Alaska Stat. § 06.60.990(19), (23), (35). A “dwelling” is “a residential structure or mobile home that contains one to four family housing units, or the individual units of condominiums or cooperatives,” and “residential real estate” is “real property on which a dwelling is constructed or intended to be constructed, including a manufactured home that has become real property.” Alaska Stat. § 06.60.990(8), (35)(B). Additionally, “‘operate in the state’ includes operating in the state from a location outside the state or from an Internet website that originates inside or outside the state.” Alaska Stat. § 06.60.990(29). Finally, a “borrower” is an individual that is a natural person. Alaska Stat. § 06.60.990(2), (13).",
              statusColor: "green",
            },
          },
          {
            name: "Residential 1-4 Business Purpose",
            type: "conclusion",
            body: {
              description:
                "Defined conduct appears to be outside the scope of Alaska Secure and Fair Enforcement for Mortgage Licensing Act of 2010 and the Alaska Real Estate Broker law",
              citation:
                "Unless exempt from licensing… a person must be licensed by the department as a mortgage licensee to operate in the state as a mortgage broker or mortgage lender with respect to a dwelling or residential real estate in the state.” Alaska Admin. Code tit. 3, § 14.010 (Emphasis added); See Alaska Stat. § 06.60.010(a). A mortgage broker “arranges with a variety of lending sources, including private lenders, institutional investors, or wholesale lenders, to provide financing for mortgage loans; or assists or offers to assist a borrower or potential borrower to obtain financing for a mortgage loan,” where a “mortgage loan” is a “residential mortgage loan” and a “residential mortgage loan” is “primarily for personal, family, or household use” and secured by a security interest on a dwelling or residential real estate located in Alaska. Alaska Stat. § 06.60.990(19), (23), (35). A “dwelling” is “a residential structure or mobile home that contains one to four family housing units, or the individual units of condominiums or cooperatives,” and “residential real estate” is “real property on which a dwelling is constructed or intended to be constructed, including a manufactured home that has become real property.” Alaska Stat. § 06.60.990(8), (35)(B). Additionally, “‘operate in the state’ includes operating in the state from a location outside the state or from an Internet website that originates inside or outside the state.” Alaska Stat. § 06.60.990(29). Finally, a “borrower” is an individual that is a natural person. Alaska Stat. § 06.60.990(2), (13).",
              statusColor: "green",
            },
          },
        ],
      },
      {
        name: "Lender",
        type: "criteria",
        data: [
          {
            name: "Commercial/Multifamily",
            type: "conclusion",
            body: {
              description:
                "Defined conduct appears to be outside the scope of Alaska Secure and Fair Enforcement for Mortgage Licensing Act of 2010 and the Alaska Real Estate Broker law",
              citation:
                "Unless exempt from licensing… a person must be licensed by the department as a mortgage licensee to operate in the state as a mortgage broker or mortgage lender with respect to a dwelling or residential real estate in the state.” Alaska Admin. Code tit. 3, § 14.010 (Emphasis added); See Alaska Stat. § 06.60.010(a). A mortgage broker “arranges with a variety of lending sources, including private lenders, institutional investors, or wholesale lenders, to provide financing for mortgage loans; or assists or offers to assist a borrower or potential borrower to obtain financing for a mortgage loan,” where a “mortgage loan” is a “residential mortgage loan” and a “residential mortgage loan” is “primarily for personal, family, or household use” and secured by a security interest on a dwelling or residential real estate located in Alaska. Alaska Stat. § 06.60.990(19), (23), (35). A “dwelling” is “a residential structure or mobile home that contains one to four family housing units, or the individual units of condominiums or cooperatives,” and “residential real estate” is “real property on which a dwelling is constructed or intended to be constructed, including a manufactured home that has become real property.” Alaska Stat. § 06.60.990(8), (35)(B). Additionally, “‘operate in the state’ includes operating in the state from a location outside the state or from an Internet website that originates inside or outside the state.” Alaska Stat. § 06.60.990(29). Finally, a “borrower” is an individual that is a natural person. Alaska Stat. § 06.60.990(2), (13).",
              statusColor: "green",
            },
          },
          {
            name: "Residential 1-4 Business Purpose",
            type: "conclusion",
            body: {
              description:
                "Defined conduct appears to be outside the scope of Alaska Secure and Fair Enforcement for Mortgage Licensing Act of 2010 and the Alaska Real Estate Broker law",
              citation:
                "Unless exempt from licensing… a person must be licensed by the department as a mortgage licensee to operate in the state as a mortgage broker or mortgage lender with respect to a dwelling or residential real estate in the state.” Alaska Admin. Code tit. 3, § 14.010 (Emphasis added); See Alaska Stat. § 06.60.010(a). A mortgage broker “arranges with a variety of lending sources, including private lenders, institutional investors, or wholesale lenders, to provide financing for mortgage loans; or assists or offers to assist a borrower or potential borrower to obtain financing for a mortgage loan,” where a “mortgage loan” is a “residential mortgage loan” and a “residential mortgage loan” is “primarily for personal, family, or household use” and secured by a security interest on a dwelling or residential real estate located in Alaska. Alaska Stat. § 06.60.990(19), (23), (35). A “dwelling” is “a residential structure or mobile home that contains one to four family housing units, or the individual units of condominiums or cooperatives,” and “residential real estate” is “real property on which a dwelling is constructed or intended to be constructed, including a manufactured home that has become real property.” Alaska Stat. § 06.60.990(8), (35)(B). Additionally, “‘operate in the state’ includes operating in the state from a location outside the state or from an Internet website that originates inside or outside the state.” Alaska Stat. § 06.60.990(29). Finally, a “borrower” is an individual that is a natural person. Alaska Stat. § 06.60.990(2), (13).",
              statusColor: "green",
            },
          },
        ],
      },
    ],
  };

  console.log("ayy lmao, evaluating these objects");
  console.log(hasSameProperties(schema, dataset));

  if (conclusionData !== undefined) {
    return (
      <Container column={column} row={row}>
        {conclusionData.map((criteria) => {
          return <p>{criteria.name}</p>;
        })}
      </Container>
    );
  } else {
    return (
      <Container column={column} row={row}>
        {"Empty."}
      </Container>
    );
  }
}

const Container = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  min-height: 50px;
  min-width: 100px;
  background-color: lightblue;
  margin: 5px;
`;
