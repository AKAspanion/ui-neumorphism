import React from 'react'

import styles from './Table.module.css'
import { getModuleClasses } from '../../util'
import {
  DEFAULT_PROPS,
  DEFAULT_PROPS_TYPE,
  G_ARR,
  G_BOOL
} from '../../assets/index'

class Table extends React.Component {
  static displayName = 'NuTable'

  static defaultProps = {
    items: [],
    headers: [],
    noDataValue: 'No data found',
    ...DEFAULT_PROPS
  }

  static propTypes = {
    flat: G_BOOL,
    items: G_ARR,
    dense: G_BOOL,
    headers: G_ARR,
    outlined: G_BOOL,
    noHeaders: G_BOOL,
    ...DEFAULT_PROPS_TYPE
  }

  get canSelfRender() {
    const { headers, items } = this.props
    return !!headers || !!items
  }

  getAlignment(align) {
    const alignValues = ['inherit', 'center', 'left', 'right', 'justify']
    return alignValues.find((v) => v === align) || alignValues[0]
  }

  getVerticalAlignment(align) {
    const alignValues = ['top', 'middle', 'bottom']
    return alignValues.find((v) => v === align) || alignValues[1]
  }

  getClasses(elem, value = {}) {
    const { dark, inset, flat, dense, outlined } = this.props
    const { align, verticalAlign } = value
    switch (elem) {
      case 'wrapper':
        return getModuleClasses(
          styles,
          `
            nu-table
            ${flat ? 'nu-table--flat' : ''}
            ${inset ? 'nu-table--inset' : ''}
            ${dense ? 'nu-table--dense' : ''}
            nu-table--${dark ? 'dark' : 'light'}
            ${outlined ? 'nu-table--outlined' : ''}
          `
        )
      case 'table':
        return getModuleClasses(styles, 'nu-table--table')
      case 'thr':
        return getModuleClasses(styles, 'nu-table--header-row')
      case 'tr':
        return getModuleClasses(styles, 'nu-table--row')
      case 'th':
        return getModuleClasses(
          styles,
          `
            nu-table--header-cell
            nu-table--align-${this.getAlignment(align)}
          `
        )
      case 'td':
        return getModuleClasses(
          styles,
          `
          nu-table--cell
          nu-table--align-${this.getAlignment(align)}
          nu-table--align-vertical-${this.getVerticalAlignment(verticalAlign)}
        `
        )
      case 'tbody':
        return getModuleClasses(styles, 'nu-table--body')
      case 'thead':
        return getModuleClasses(styles, 'nu-table--header')
      case 'no-data':
        return getModuleClasses(styles, 'nu-table--cell nu-table--align-center')
    }
  }

  getTableHeadData() {
    const { headers } = this.props
    return (
      <tr className={this.getClasses('thr')}>
        {headers.map((header, i) => (
          <th
            key={i}
            scope='col'
            className={`${this.getClasses('th', header)} ${header.className}`}
          >
            {header.text}
          </th>
        ))}
      </tr>
    )
  }

  getTableRowData() {
    const { headers, items } = this.props
    return items.map((item, i) => (
      <tr key={i} className={this.getClasses('tr')}>
        {headers.map((header, j) => (
          <td
            key={j}
            scope={j === 0 ? 'row' : null}
            className={`${this.getClasses('td', header)} ${header.className}`}
          >
            {item[header.value]}
          </td>
        ))}
      </tr>
    ))
  }

  render() {
    const {
      items,
      style,
      headers,
      children,
      className,
      noHeaders,
      noDataValue
    } = this.props
    return (
      <div
        style={style}
        className={`${this.getClasses('wrapper')} ${className}`}
      >
        {this.canSelfRender ? (
          <table className={this.getClasses('table')}>
            {noHeaders ? null : (
              <thead className={this.getClasses('thead')}>
                {this.getTableHeadData()}
              </thead>
            )}
            <tbody className={this.getClasses('tbody')}>
              {!items.length ? (
                <tr>
                  <td
                    colSpan={headers.length}
                    className={this.getClasses('no-data')}
                  >
                    {noDataValue}
                  </td>
                </tr>
              ) : (
                this.getTableRowData()
              )}
            </tbody>
          </table>
        ) : (
          children
        )}
      </div>
    )
  }
}

export default Table
