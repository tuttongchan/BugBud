import { useEffect } from 'react';
import './tabquestions.css';
import CodeEditor from '@uiw/react-textarea-code-editor';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { questionsDetails } from '../../actions/questionActions';

const TabQuestions = () => {
  const dispatch = useDispatch();
  const allQuestions = useSelector(
    (state) => state.questionsDetails.questions || []
  );
  const { loading, error } = allQuestions;

  useEffect(() => {
    dispatch(questionsDetails());
  }, [dispatch]);

  let rows = [];
  rows = allQuestions.map((question, i) => {
    return (rows = {
      realId: question._id,
      id: i + 1,
      questionName: question.questionName,
    });
  });

  const columns = [
    // { field: 'realId', headerName: 'ID', display: 'none' },
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'questionName',
      headerName: 'Questions',
      width: 220,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        // let id
        // allQuestions.map((yeet) => {
        //   id = yeet._id
        // });
        // console.log(id);

        return (
          <Link to={{ pathname: '/list/' + params.row._id, list: params.row }}>
            <button className='view-button'>View</button>
          </Link>
        );
      },
    },
  ];

  // params.row._id

  return (
    <>
      <div className="tabquestions-container">
        {/* {loading ? (
          <></>
        ) : error ? (
          <></>
        ) : (
          <>
            {questions.map((item) => (
              <>
                <div className="tabquestions-left-container">
                  <h1>Questions</h1>
                  <h1>{item.questionName}</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Obcaecati unde vero nisi dolorum eveniet magnam, similique
                    officia beatae quasi delectus nam!
                  </p>
                </div>
                <div className="tabquestions-right-container">
                  <CodeEditor
                    //   value={code}
                    language="js"
                    placeholder="Please enter JS code."
                    //   onChange={(e) => setCode(e.target.value)}
                    padding={15}
                    style={{
                      width: '100%',
                      height: '70%',
                      borderRadius: '5px',
                      marginBottom: '2rem',
                      fontSize: 16,
                      backgroundColor: '#f5f5f5',
                      fontFamily:
                        'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                  />
                  <CodeEditor
                    //   value={code}
                    language="js"
                    placeholder="Please enter JS code."
                    //   onChange={(e) => setCode(e.target.value)}
                    padding={15}
                    style={{
                      width: '100%',
                      height: '25%',
                      borderRadius: '5px',
                      fontSize: 16,
                      backgroundColor: '#f5f5f5',
                      fontFamily:
                        'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                  />
                </div>
              </>
            ))}
          </>
        )} */}

        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundColor: '#fff',
            borderRadius: '5px',
          }}
        >
          {loading ? (
            <></>
          ) : error ? (
            <></>
          ) : (
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              // checkboxSelection
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TabQuestions;
