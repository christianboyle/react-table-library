/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { storiesOf } from '@storybook/react';

import UnfoldMoreOutlinedIcon from '@material-ui/icons/UnfoldMoreOutlined';
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined';
import Button from '@material-ui/core/Button';

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell
} from '@table-library/react-table-library/lib/table';

import {
  useSort,
  HeaderCellSort,
  SORT_ICON_POSITIONS
} from '@table-library/react-table-library/lib/sort';

import { nodes } from '../data';

storiesOf('02. Features/ 05. Sort', module)
  .addParameters({ component: Table })
  .add('default', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('default sort', () => {
    const data = { nodes };

    const sort = useSort({
      initialState: {
        sortKey: 'TASK',
        sortFn: array =>
          array.sort((a, b) => a.name.localeCompare(b.name)),
        reverse: false
      },
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('sort icon size ', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                  sortIcon={{
                    size: '10px'
                  }}
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                  sortIcon={{
                    size: '10px'
                  }}
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                  sortIcon={{
                    size: '10px'
                  }}
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                  sortIcon={{
                    size: '10px'
                  }}
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                  sortIcon={{
                    size: '10px'
                  }}
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('sort icon position ', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('indentation ', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                  sortIcon={{
                    position: SORT_ICON_POSITIONS.Prefix
                  }}
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell indentation={18}>{tableItem.name}</Cell>
                      <Cell indentation={18}>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell indentation={18}>{tableItem.type}</Cell>
                      <Cell indentation={18}>
                        {tableItem.isComplete.toString()}
                      </Cell>
                      <Cell indentation={18}>
                        {tableItem.nodes?.length}
                      </Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('no sort icon', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                  sortIcon={{
                    iconDefault: null,
                    iconUp: null,
                    iconDown: null
                  }}
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                  sortIcon={{
                    iconDefault: null,
                    iconUp: null,
                    iconDown: null
                  }}
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                  sortIcon={{
                    iconDefault: null,
                    iconUp: null,
                    iconDown: null
                  }}
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                  sortIcon={{
                    iconDefault: null,
                    iconUp: null,
                    iconDown: null
                  }}
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                  sortIcon={{
                    iconDefault: null,
                    iconUp: null,
                    iconDown: null
                  }}
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('custom sort icon (Material UI)', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCellSort
                  sortKey="TASK"
                  sortFn={array =>
                    array.sort((a, b) => a.name.localeCompare(b.name))
                  }
                  sortIcon={{
                    margin: '0px',
                    iconDefault: (
                      <UnfoldMoreOutlinedIcon fontSize="small" />
                    ),
                    iconUp: (
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    ),
                    iconDown: (
                      <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    )
                  }}
                >
                  Task
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="DEADLINE"
                  sortFn={array =>
                    array.sort((a, b) => a.deadline - b.deadline)
                  }
                  sortIcon={{
                    margin: '0px',
                    iconDefault: (
                      <UnfoldMoreOutlinedIcon fontSize="small" />
                    ),
                    iconUp: (
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    ),
                    iconDown: (
                      <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    )
                  }}
                >
                  Deadline
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TYPE"
                  sortFn={array =>
                    array.sort((a, b) => a.type.localeCompare(b.type))
                  }
                  sortIcon={{
                    margin: '0px',
                    iconDefault: (
                      <UnfoldMoreOutlinedIcon fontSize="small" />
                    ),
                    iconUp: (
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    ),
                    iconDown: (
                      <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    )
                  }}
                >
                  Type
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="COMPLETE"
                  sortFn={array =>
                    array.sort((a, b) => a.isComplete - b.isComplete)
                  }
                  sortIcon={{
                    margin: '0px',
                    iconDefault: (
                      <UnfoldMoreOutlinedIcon fontSize="small" />
                    ),
                    iconUp: (
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    ),
                    iconDown: (
                      <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    )
                  }}
                >
                  Complete
                </HeaderCellSort>
                <HeaderCellSort
                  sortKey="TASKS"
                  sortFn={array =>
                    array.sort(
                      (a, b) =>
                        (a.nodes || []).length -
                        (b.nodes || []).length
                    )
                  }
                  sortIcon={{
                    margin: '0px',
                    iconDefault: (
                      <UnfoldMoreOutlinedIcon fontSize="small" />
                    ),
                    iconUp: (
                      <KeyboardArrowUpOutlinedIcon fontSize="small" />
                    ),
                    iconDown: (
                      <KeyboardArrowDownOutlinedIcon fontSize="small" />
                    )
                  }}
                >
                  Tasks
                </HeaderCellSort>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  })
  .add('custom sort button (Material UI)', () => {
    const data = { nodes };

    const sort = useSort({
      onChange: onSortChange
    });

    function onSortChange(action, state) {
      console.log(action, state);
    }

    const getIcon = sortKey => {
      if (sort.state.sortKey === sortKey && sort.state.reverse) {
        return <KeyboardArrowDownOutlinedIcon />;
      }

      if (sort.state.sortKey === sortKey && !sort.state.reverse) {
        return <KeyboardArrowUpOutlinedIcon />;
      }

      return <UnfoldMoreOutlinedIcon />;
    };

    return (
      <Table data={data} sort={sort}>
        {tableList => (
          <>
            <Header>
              <HeaderRow>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: 'flex-start' }}
                    endIcon={getIcon('TASK')}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: 'TASK',
                        sortFn: array =>
                          array.sort((a, b) =>
                            a.name.localeCompare(b.name)
                          )
                      })
                    }
                  >
                    Task
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: 'flex-start' }}
                    endIcon={getIcon('DEADLINE')}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: 'DEADLINE',
                        sortFn: array =>
                          array.sort(
                            (a, b) => a.deadline - b.deadline
                          )
                      })
                    }
                  >
                    Deadline
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: 'flex-start' }}
                    endIcon={getIcon('TYPE')}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: 'TYPE',
                        sortFn: array =>
                          array.sort((a, b) =>
                            a.type.localeCompare(b.type)
                          )
                      })
                    }
                  >
                    Type
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: 'flex-start' }}
                    endIcon={getIcon('COMPLETE')}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: 'COMPLETE',
                        sortFn: array =>
                          array.sort(
                            (a, b) => a.isComplete - b.isComplete
                          )
                      })
                    }
                  >
                    Complete
                  </Button>
                </HeaderCell>
                <HeaderCell>
                  <Button
                    fullWidth
                    style={{ justifyContent: 'flex-start' }}
                    endIcon={getIcon('TASKS')}
                    onClick={() =>
                      sort.fns.onToggleSort({
                        sortKey: 'TASKS',
                        sortFn: array =>
                          array.sort(
                            (a, b) =>
                              (a.nodes || []).length -
                              (b.nodes || []).length
                          )
                      })
                    }
                  >
                    Tasks
                  </Button>
                </HeaderCell>
              </HeaderRow>
            </Header>

            <Body>
              {tableList.map(item => (
                <Row item={item} key={item.id}>
                  {tableItem => (
                    <React.Fragment key={tableItem.id}>
                      <Cell>{tableItem.name}</Cell>
                      <Cell>
                        {tableItem.deadline.toLocaleDateString(
                          'fr-CA',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit'
                          }
                        )}
                      </Cell>
                      <Cell>{tableItem.type}</Cell>
                      <Cell>{tableItem.isComplete.toString()}</Cell>
                      <Cell>{tableItem.nodes?.length}</Cell>
                    </React.Fragment>
                  )}
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>
    );
  });
