import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import { selectUserInfo } from '../userSlice';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function UserProfile() {
  const userInfo = useSelector(selectUserInfo)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="h-24 bg-indigo-700 sm:h-20 lg:h-28" />
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        <Grid item xs={10}>
          <Item>
            <div>
              <div className="divide-y divide-gray-200">
                <div className="pb-6">
                  <div className="-mt-12 flow-root px-4 sm:-mt-8 sm:flex sm:items-end sm:px-6 lg:-mt-16">
                    <div>
                      <div className="-m-1 flex">
                        <div className="inline-flex overflow-hidden rounded-full border-4 border-white">
                          <img
                            className="h-24 w-24 flex-shrink-0 sm:h-40 sm:w-40 lg:h-48 lg:w-48"
                            src={userInfo?.profilePicture}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 sm:ml-6 sm:flex-1">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                           {userInfo?.name}
                          </h3>
                          <span className="ml-2.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-green-400">
                            <span className="sr-only">Online</span>
                          </span>
                        </div>
                        <p className="text-sm flex text-gray-500 ">@{userInfo.username}</p>
                      </div>
                      {/* <div className="mt-5 flex flex-wrap space-y-3 sm:space-x-3 sm:space-y-0">
                              <button
                                type="button"
                                className="inline-flex w-full flex-shrink-0 items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-1"
                              >
                                Message
                              </button>
                              <button
                                type="button"
                                className="inline-flex w-full flex-1 items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                              >
                                Call
                              </button>
                              <div className="ml-3 inline-flex sm:ml-0">
                                <Menu
                                  as="div"
                                  className="relative inline-block text-left"
                                >
                                  <Menu.Button className="relative inline-flex items-center rounded-md bg-white p-2 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                    <span className="absolute -inset-1" />
                                    <span className="sr-only">
                                      Open options menu
                                    </span>
                                    <EllipsisVerticalIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                  <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                  >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                      <div className="py-1">
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                              )}
                                            >
                                              View profile
                                            </a>
                                          )}
                                        </Menu.Item>
                                        <Menu.Item>
                                          {({ active }) => (
                                            <a
                                              href="#"
                                              className={classNames(
                                                active
                                                  ? "bg-gray-100 text-gray-900"
                                                  : "text-gray-700",
                                                "block px-4 py-2 text-sm"
                                              )}
                                            >
                                              Copy profile link
                                            </a>
                                          )}
                                        </Menu.Item>
                                      </div>
                                    </Menu.Items>
                                  </Transition>
                                </Menu>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-5 sm:px-0 sm:py-0">
                  <dl className="space-y-8 sm:space-y-0 sm:divide-y sm:divide-gray-200">
                    <div className="sm:flex sm:px-6 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                        Bio
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                        <p>
                          
                          {userInfo?.bio}
                        </p>
                      </dd>
                    </div>
                    {/* <div className="sm:flex sm:px-6 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                        Location
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                        New York, NY, USA
                      </dd>
                    </div>
                    <div className="sm:flex sm:px-6 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                        Website
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                        ashleyporter.com
                      </dd>
                    </div>
                    <div className="sm:flex sm:px-6 sm:py-5">
                      <dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
                        Birthday
                      </dt>
                      <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:ml-6 sm:mt-0">
                        <time dateTime="1982-06-23">June 23, 1982</time>
                      </dd>
                    </div> */}
                  </dl>
                </div>
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item>
            
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserProfile