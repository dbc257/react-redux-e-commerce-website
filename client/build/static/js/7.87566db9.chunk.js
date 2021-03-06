(this['webpackJsonpfuse-react-app'] = this['webpackJsonpfuse-react-app'] || []).push([
	[7],
	{
		1135: function (e, t, a) {
			'use strict';
			a.d(t, 'd', function () {
				return o;
			}),
				a.d(t, 'h', function () {
					return i;
				}),
				a.d(t, 'l', function () {
					return c;
				}),
				a.d(t, 'o', function () {
					return l;
				}),
				a.d(t, 'c', function () {
					return s;
				}),
				a.d(t, 'f', function () {
					return u;
				}),
				a.d(t, 'k', function () {
					return m;
				}),
				a.d(t, 'm', function () {
					return p;
				}),
				a.d(t, 'b', function () {
					return f;
				}),
				a.d(t, 'g', function () {
					return b;
				}),
				a.d(t, 'j', function () {
					return h;
				}),
				a.d(t, 'n', function () {
					return g;
				}),
				a.d(t, 'a', function () {
					return E;
				}),
				a.d(t, 'e', function () {
					return v;
				}),
				a.d(t, 'i', function () {
					return x;
				});
			var r = a(94),
				n = a.n(r),
				o = '[E-COMMERCE APP] GET PRODUCTS',
				i = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
			function c() {
				var e = n.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/products');
				return function (t) {
					return e.then(function (e) {
						return t({ type: o, payload: e.data });
					});
				};
			}
			function l(e) {
				return { type: i, searchText: e.target.value };
			}
			var d = a(20),
				s = (a(32), '[E-COMMERCE APP] GET PRODUCT'),
				u = '[E-COMMERCE APP] SAVE PRODUCT';
			function m(e) {
				var t = n.a.get(
					'https://art-shop-server.herokuapp.com/api/e-commerce-app/product/'.concat(e.productId)
				);
				return function (e) {
					return t.then(function (t) {
						return e({ type: s, payload: t.data });
					});
				};
			}
			function p() {
				var e = {
					id: d.a.generateGUID(),
					name: '',
					handle: '',
					description: '',
					categories: [],
					tags: [],
					images: [],
					priceTaxExcl: 0,
					priceTaxIncl: 0,
					taxRate: 0,
					comparedPrice: 0,
					quantity: 0,
					sku: '',
					width: '',
					height: '',
					depth: '',
					weight: '',
					extraShippingFee: 0,
					active: !0
				};
				return { type: s, payload: e };
			}
			var f = '[E-COMMERCE APP] GET ORDERS',
				b = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';
			function h() {
				var e = n.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/orders');
				return function (t) {
					return e.then(function (e) {
						return t({ type: f, payload: e.data });
					});
				};
			}
			function g(e) {
				return { type: b, searchText: e.target.value };
			}
			var E = '[E-COMMERCE APP] GET ORDER',
				v = '[E-COMMERCE APP] SAVE ORDER';
			function x(e) {
				var t = n.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/order/'.concat(e.orderId));
				return function (e) {
					return t.then(function (t) {
						return e({ type: E, payload: t.data });
					});
				};
			}
		},
		1137: function (e, t, a) {
			'use strict';
			var r = a(212),
				n = a(0),
				o = a.n(n);
			t.a = function (e, t) {
				return function (a) {
					return (
						Object(r.b)(e, t),
						function (e) {
							return o.a.createElement(a, e);
						}
					);
				};
			};
		},
		1138: function (e, t, a) {
			'use strict';
			var r = a(57),
				n = a(9),
				o = a(1135),
				i = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.a:
						case o.e:
							return Object(n.a)({}, t.payload);
						default:
							return e;
					}
				},
				c = { data: [], searchText: '' },
				l = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.b:
							return Object(n.a)({}, e, { data: t.payload });
						case o.g:
							return Object(n.a)({}, e, { searchText: t.searchText });
						default:
							return e;
					}
				},
				d = { data: null },
				s = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.c:
						case o.f:
							return Object(n.a)({}, e, { data: t.payload });
						default:
							return e;
					}
				},
				u = { data: [], searchText: '' },
				m = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case o.d:
							return Object(n.a)({}, e, { data: t.payload });
						case o.h:
							return Object(n.a)({}, e, { searchText: t.searchText });
						default:
							return e;
					}
				},
				p = Object(r.d)({ products: m, product: s, orders: l, order: i });
			t.a = p;
		},
		1145: function (e, t, a) {
			'use strict';
			var r = a(6),
				n = a(2),
				o = a(0),
				i = a.n(o),
				c = [
					{ id: 1, name: 'Awaiting check payment', color: 'bg-blue text-white' },
					{ id: 2, name: 'Payment accepted', color: 'bg-green text-white' },
					{ id: 3, name: 'Preparing the order', color: 'bg-orange text-black' },
					{ id: 4, name: 'Shipped', color: 'bg-purple text-white' },
					{ id: 5, name: 'Delivered', color: 'bg-green-700 text-white' },
					{ id: 6, name: 'Canceled', color: 'bg-pink text-white' },
					{ id: 7, name: 'Refunded', color: 'bg-red text-white' },
					{ id: 8, name: 'Payment error', color: 'bg-red-700 text-white' },
					{ id: 9, name: 'On pre-order (paid)', color: 'bg-purple-300 text-white' },
					{ id: 10, name: 'Awaiting bank wire payment', color: 'bg-blue text-white' },
					{ id: 11, name: 'Awaiting PayPal payment', color: 'bg-blue-700 text-white' },
					{ id: 12, name: 'Remote payment accepted', color: 'bg-green-800 text-white' },
					{ id: 13, name: 'On pre-order (not paid)', color: 'bg-purple-700 text-white' },
					{ id: 14, name: 'Awaiting Cash-on-delivery payment', color: 'bg-blue-800 text-white' }
				];
			t.a = function (e) {
				return i.a.createElement(
					'div',
					{
						className: Object(n.a)(
							'inline text-12 p-4 rounded truncate',
							r.a.find(c, { name: e.name }).color
						)
					},
					e.name
				);
			};
		},
		1146: function (e, t, a) {
			'use strict';
			a.d(t, 'a', function () {
				return v;
			});
			var r = a(50),
				n = a(105),
				o = a(1100),
				i = a(2),
				c = a(0),
				l = a.n(c),
				d = a(1103),
				s = a(8);
			var u = function (e) {
					var t = Object(s.c)(function (e) {
						return e.fuse.settings.mainThemeDark;
					});
					return l.a.createElement(
						'div',
						{ className: e.classes.header },
						e.header && l.a.createElement(d.a, { theme: t }, e.header)
					);
				},
				m = a(26),
				p = a(1133),
				f = a(1129);
			var b = function (e) {
				var t = Object(s.c)(function (e) {
						return e.fuse.settings.mainThemeDark;
					}),
					a = e.classes;
				return l.a.createElement(
					l.a.Fragment,
					null,
					e.header &&
						l.a.createElement(
							d.a,
							{ theme: t },
							l.a.createElement('div', { className: Object(i.a)(a.sidebarHeader, e.variant) }, e.header)
						),
					e.content &&
						l.a.createElement(n.a, { className: a.sidebarContent, enable: e.innerScroll }, e.content)
				);
			};
			var h = l.a.forwardRef(function (e, t) {
					var a = Object(c.useState)(!1),
						r = Object(m.a)(a, 2),
						n = r[0],
						o = r[1],
						d = e.classes;
					Object(c.useImperativeHandle)(t, function () {
						return { toggleSidebar: s };
					});
					var s = function () {
						o(!n);
					};
					return l.a.createElement(
						l.a.Fragment,
						null,
						l.a.createElement(
							f.a,
							{ lgUp: 'permanent' === e.variant },
							l.a.createElement(
								p.a,
								{
									variant: 'temporary',
									anchor: e.position,
									open: n,
									onClose: function (e) {
										return s();
									},
									classes: {
										root: Object(i.a)(d.sidebarWrapper, e.variant),
										paper: Object(i.a)(
											d.sidebar,
											e.variant,
											'left' === e.position ? d.leftSidebar : d.rightSidebar
										)
									},
									ModalProps: { keepMounted: !0 },
									container: e.rootRef.current,
									BackdropProps: { classes: { root: d.backdrop } },
									style: { position: 'absolute' }
								},
								l.a.createElement(b, e)
							)
						),
						'permanent' === e.variant &&
							l.a.createElement(
								f.a,
								{ mdDown: !0 },
								l.a.createElement(
									p.a,
									{
										variant: 'permanent',
										className: Object(i.a)(d.sidebarWrapper, e.variant),
										open: n,
										classes: {
											paper: Object(i.a)(
												d.sidebar,
												e.variant,
												'left' === e.position ? d.leftSidebar : d.rightSidebar
											)
										}
									},
									l.a.createElement(b, e)
								)
							)
					);
				}),
				g = Object(o.a)(function (e) {
					return {
						root: {
							display: 'flex',
							flexDirection: 'row',
							minHeight: '100%',
							position: 'relative',
							flex: '1 0 auto',
							height: 'auto',
							backgroundColor: e.palette.background.default
						},
						innerScroll: { flex: '1 1 auto', height: '100%' },
						topBg: {
							position: 'absolute',
							left: 0,
							right: 0,
							top: 0,
							height: 200,
							background: 'linear-gradient(to right, '
								.concat(e.palette.primary.dark, ' 0%, ')
								.concat(e.palette.primary.main, ' 100%)'),
							backgroundSize: 'cover',
							pointerEvents: 'none'
						},
						contentWrapper: Object(r.a)(
							{
								display: 'flex',
								flexDirection: 'column',
								padding: '0 3.2rem',
								flex: '1 1 100%',
								zIndex: 2,
								maxWidth: '100%',
								minWidth: 0,
								minHeight: 0
							},
							e.breakpoints.down('xs'),
							{ padding: '0 1.6rem' }
						),
						header: {
							height: 136,
							minHeight: 136,
							maxHeight: 136,
							display: 'flex',
							color: e.palette.primary.contrastText
						},
						headerSidebarToggleButton: { color: e.palette.primary.contrastText },
						contentCard: {
							display: 'flex',
							flex: '1 1 100%',
							flexDirection: 'column',
							backgroundColor: e.palette.background.paper,
							boxShadow: e.shadows[1],
							minHeight: 0,
							borderRadius: '8px 8px 0 0'
						},
						toolbar: {
							height: 64,
							minHeight: 64,
							display: 'flex',
							alignItems: 'center',
							borderBottom: '1px solid '.concat(e.palette.divider)
						},
						content: {
							flex: '1 1 auto',
							height: '100%',
							overflow: 'auto',
							'-webkit-overflow-scrolling': 'touch'
						},
						sidebarWrapper: {
							position: 'absolute',
							backgroundColor: 'transparent',
							zIndex: 5,
							overflow: 'hidden',
							'&.permanent': Object(r.a)({}, e.breakpoints.up('lg'), { zIndex: 1, position: 'relative' })
						},
						sidebar: {
							position: 'absolute',
							'&.permanent': Object(r.a)({}, e.breakpoints.up('lg'), {
								backgroundColor: 'transparent',
								position: 'relative',
								border: 'none',
								overflow: 'hidden'
							}),
							width: 240,
							height: '100%'
						},
						leftSidebar: {},
						rightSidebar: {},
						sidebarHeader: {
							height: 200,
							minHeight: 200,
							color: e.palette.primary.contrastText,
							backgroundColor: e.palette.primary.dark,
							'&.permanent': Object(r.a)({}, e.breakpoints.up('lg'), { backgroundColor: 'transparent' })
						},
						sidebarContent: Object(r.a)(
							{
								display: 'flex',
								flex: '1 1 auto',
								flexDirection: 'column',
								backgroundColor: e.palette.background.default,
								color: e.palette.text.primary
							},
							e.breakpoints.up('lg'),
							{ overflow: 'auto', '-webkit-overflow-scrolling': 'touch' }
						),
						backdrop: { position: 'absolute' }
					};
				}),
				E = l.a.forwardRef(function (e, t) {
					var a = Object(c.useRef)(null),
						r = Object(c.useRef)(null),
						o = Object(c.useRef)(null),
						d = g(e),
						s = e.rightSidebarHeader || e.rightSidebarContent,
						m = e.leftSidebarHeader || e.leftSidebarContent;
					return (
						l.a.useImperativeHandle(t, function () {
							return {
								rootRef: o,
								toggleLeftSidebar: function () {
									a.current.toggleSidebar();
								},
								toggleRightSidebar: function () {
									r.current.toggleSidebar();
								}
							};
						}),
						l.a.createElement(
							'div',
							{ className: Object(i.a)(d.root, e.innerScroll && d.innerScroll), ref: o },
							l.a.createElement('div', { className: d.topBg }),
							l.a.createElement(
								'div',
								{ className: 'flex container w-full' },
								m &&
									l.a.createElement(h, {
										position: 'left',
										header: e.leftSidebarHeader,
										content: e.leftSidebarContent,
										variant: e.leftSidebarVariant || 'permanent',
										innerScroll: e.innerScroll,
										classes: d,
										ref: a,
										rootRef: o
									}),
								l.a.createElement(
									'div',
									{
										className: Object(i.a)(
											d.contentWrapper,
											m &&
												(void 0 === e.leftSidebarVariant ||
													'permanent' === e.leftSidebarVariant) &&
												'lg:ltr:pl-0 lg:rtl:pr-0',
											s &&
												(void 0 === e.rightSidebarVariant ||
													'permanent' === e.rightSidebarVariant) &&
												'lg:pr-0'
										)
									},
									l.a.createElement(u, { header: e.header, classes: d }),
									l.a.createElement(
										'div',
										{ className: Object(i.a)(d.contentCard, e.innerScroll && 'inner-scroll') },
										e.contentToolbar &&
											l.a.createElement('div', { className: d.toolbar }, e.contentToolbar),
										e.content &&
											l.a.createElement(
												n.a,
												{
													className: d.content,
													enable: e.innerScroll,
													scrollToTopOnRouteChange: e.innerScroll
												},
												e.content
											)
									)
								),
								s &&
									l.a.createElement(h, {
										position: 'right',
										header: e.rightSidebarHeader,
										content: e.rightSidebarContent,
										variant: e.rightSidebarVariant || 'permanent',
										innerScroll: e.innerScroll,
										classes: d,
										ref: r,
										rootRef: o
									})
							)
						)
					);
				});
			E.defaultProps = {};
			var v = l.a.memo(E);
		},
		1165: function (e, t, a) {
			'use strict';
			a.r(t);
			var r = a(1146),
				n = a(1137),
				o = a(0),
				i = a.n(o),
				c = a(1138),
				l = a(125),
				d = a(1107),
				s = a(1055),
				u = a(269),
				m = a(1103),
				p = a(180),
				f = a(8),
				b = a(1135);
			var h = function (e) {
					var t = Object(f.b)(),
						a = Object(f.c)(function (e) {
							return e.eCommerceApp.orders.searchText;
						}),
						r = Object(f.c)(function (e) {
							return e.fuse.settings.mainTheme;
						});
					return i.a.createElement(
						'div',
						{ className: 'flex flex-1 w-full items-center justify-between' },
						i.a.createElement(
							'div',
							{ className: 'flex items-center' },
							i.a.createElement(
								l.a,
								{ animation: 'transition.expandIn', delay: 300 },
								i.a.createElement(d.a, { className: 'text-32' }, 'shopping_basket')
							),
							i.a.createElement(
								l.a,
								{ animation: 'transition.slideLeftIn', delay: 300 },
								i.a.createElement(
									p.a,
									{ className: 'hidden sm:flex mx-0 sm:mx-12', variant: 'h6' },
									'Orders'
								)
							)
						),
						i.a.createElement(
							'div',
							{ className: 'flex flex-1 items-center justify-center px-12' },
							i.a.createElement(
								m.a,
								{ theme: r },
								i.a.createElement(
									l.a,
									{ animation: 'transition.slideDownIn', delay: 300 },
									i.a.createElement(
										u.a,
										{
											className: 'flex items-center w-full max-w-512 px-8 py-4 rounded-8',
											elevation: 1
										},
										i.a.createElement(d.a, { color: 'action' }, 'search'),
										i.a.createElement(s.a, {
											placeholder: 'Search',
											className: 'flex flex-1 mx-8',
											disableUnderline: !0,
											fullWidth: !0,
											value: a,
											inputProps: { 'aria-label': 'Search' },
											onChange: function (e) {
												return t(b.n(e));
											}
										})
									)
								)
							)
						)
					);
				},
				g = a(26),
				E = a(105),
				v = a(20),
				x = a(6),
				O = a(1147),
				w = a(1151),
				y = a(1150),
				S = a(1170),
				j = a(1149),
				C = a(35),
				P = a(1145),
				k = a(1148),
				R = a(1171),
				T = a(1132),
				N = [
					{ id: 'id', align: 'left', disablePadding: !1, label: 'ID', sort: !0 },
					{ id: 'reference', align: 'left', disablePadding: !1, label: 'Reference', sort: !0 },
					{ id: 'customer', align: 'left', disablePadding: !1, label: 'Customer', sort: !0 },
					{ id: 'total', align: 'right', disablePadding: !1, label: 'Total', sort: !0 },
					{ id: 'payment', align: 'left', disablePadding: !1, label: 'Payment', sort: !0 },
					{ id: 'status', align: 'left', disablePadding: !1, label: 'Status', sort: !0 },
					{ id: 'date', align: 'left', disablePadding: !1, label: 'Date', sort: !0 }
				];
			var D = function (e) {
				return i.a.createElement(
					k.a,
					null,
					i.a.createElement(
						j.a,
						{ className: 'h-64' },
						N.map(function (t) {
							return i.a.createElement(
								y.a,
								{
									key: t.id,
									align: t.align,
									padding: t.disablePadding ? 'none' : 'default',
									sortDirection: e.order.id === t.id && e.order.direction
								},
								t.sort &&
									i.a.createElement(
										T.a,
										{
											title: 'Sort',
											placement: 'right' === t.align ? 'bottom-end' : 'bottom-start',
											enterDelay: 300
										},
										i.a.createElement(
											R.a,
											{
												active: e.order.id === t.id,
												direction: e.order.direction,
												onClick:
													((a = t.id),
													function (t) {
														e.onRequestSort(t, a);
													})
											},
											t.label
										)
									)
							);
							var a;
						}, this)
					)
				);
			};
			var A = Object(C.i)(function (e) {
				var t = Object(f.b)(),
					a = Object(f.c)(function (e) {
						return e.eCommerceApp.orders.data;
					}),
					r = Object(f.c)(function (e) {
						return e.eCommerceApp.orders.searchText;
					}),
					n = Object(o.useState)(a),
					c = Object(g.a)(n, 2),
					l = c[0],
					d = c[1],
					s = Object(o.useState)(0),
					u = Object(g.a)(s, 2),
					m = u[0],
					p = u[1],
					h = Object(o.useState)(10),
					C = Object(g.a)(h, 2),
					k = C[0],
					R = C[1],
					T = Object(o.useState)({ direction: 'asc', id: null }),
					N = Object(g.a)(T, 2),
					A = N[0],
					I = N[1];
				return (
					Object(o.useEffect)(
						function () {
							t(b.j());
						},
						[t]
					),
					Object(o.useEffect)(
						function () {
							0 !== r.length ? (d(v.a.filterArrayByString(a, r)), p(0)) : d(a);
						},
						[a, r]
					),
					i.a.createElement(
						'div',
						{ className: 'w-full flex flex-col' },
						i.a.createElement(
							E.a,
							{ className: 'flex-grow overflow-x-auto' },
							i.a.createElement(
								O.a,
								{ className: 'min-w-xl', 'aria-labelledby': 'tableTitle' },
								i.a.createElement(D, {
									order: A,
									onRequestSort: function (e, t) {
										var a = t,
											r = 'desc';
										A.id === t && 'desc' === A.direction && (r = 'asc'), I({ direction: r, id: a });
									},
									rowCount: l.length
								}),
								i.a.createElement(
									w.a,
									null,
									x.a
										.orderBy(
											l,
											[
												function (e) {
													switch (A.id) {
														case 'id':
															return parseInt(e.id, 10);
														case 'customer':
															return e.customer.firstName;
														case 'payment':
															return e.payment.method;
														case 'status':
															return e.status[0].name;
														default:
															return e[A.id];
													}
												}
											],
											[A.direction]
										)
										.slice(m * k, m * k + k)
										.map(function (t) {
											return i.a.createElement(
												j.a,
												{
													className: 'h-64 cursor-pointer',
													hover: !0,
													role: 'checkbox',
													tabIndex: -1,
													key: t.id,
													onClick: function (a) {
														return (
															(r = t),
															void e.history.push('/apps/e-commerce/orders/'.concat(r.id))
														);
														var r;
													}
												},
												i.a.createElement(y.a, { component: 'th', scope: 'row' }, t.id),
												i.a.createElement(y.a, { component: 'th', scope: 'row' }, t.reference),
												i.a.createElement(
													y.a,
													{ className: 'truncate', component: 'th', scope: 'row' },
													''.concat(t.customer.firstName, ' ').concat(t.customer.lastName)
												),
												i.a.createElement(
													y.a,
													{ component: 'th', scope: 'row', align: 'right' },
													i.a.createElement('span', null, '$'),
													t.total
												),
												i.a.createElement(
													y.a,
													{ component: 'th', scope: 'row' },
													t.payment.method
												),
												i.a.createElement(
													y.a,
													{ component: 'th', scope: 'row' },
													i.a.createElement(P.a, { name: t.status[0].name })
												),
												i.a.createElement(y.a, { component: 'th', scope: 'row' }, t.date)
											);
										})
								)
							)
						),
						i.a.createElement(S.a, {
							className: 'overflow-hidden',
							component: 'div',
							count: l.length,
							rowsPerPage: k,
							page: m,
							backIconButtonProps: { 'aria-label': 'Previous Page' },
							nextIconButtonProps: { 'aria-label': 'Next Page' },
							onChangePage: function (e, t) {
								p(t);
							},
							onChangeRowsPerPage: function (e) {
								R(e.target.value);
							}
						})
					)
				);
			});
			t.default = Object(n.a)('eCommerceApp', c.a)(function () {
				return i.a.createElement(r.a, {
					classes: { content: 'flex', header: 'min-h-72 h-72 sm:h-136 sm:min-h-136' },
					header: i.a.createElement(h, null),
					content: i.a.createElement(A, null),
					innerScroll: !0
				});
			});
		}
	}
]);
