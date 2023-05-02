import { Fragment } from "react";

const Table = ({ data, config, keyFunction }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          {config.map((rowInfo) => {
            return rowInfo.header ? (
              <Fragment key={rowInfo.label}>{rowInfo.header()}</Fragment>
            ) : (
              <th key={rowInfo.label}>{rowInfo.label}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((fruit) => {
          return (
            <tr key={keyFunction(fruit)}>
              {config.map((rowConfig) => {
                return <td key={rowConfig.label}>{rowConfig.render(fruit)}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
