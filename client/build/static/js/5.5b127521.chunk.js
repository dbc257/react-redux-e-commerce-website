(this['webpackJsonpfuse-react-app'] = this['webpackJsonpfuse-react-app'] || []).push([
	[5],
	{
		1135: function (e, t, a) {
			'use strict';
			a.d(t, 'd', function () {
				return c;
			}),
				a.d(t, 'h', function () {
					return o;
				}),
				a.d(t, 'l', function () {
					return l;
				}),
				a.d(t, 'o', function () {
					return i;
				}),
				a.d(t, 'c', function () {
					return d;
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
					return h;
				}),
				a.d(t, 'j', function () {
					return g;
				}),
				a.d(t, 'n', function () {
					return E;
				}),
				a.d(t, 'a', function () {
					return v;
				}),
				a.d(t, 'e', function () {
					return b;
				}),
				a.d(t, 'i', function () {
					return y;
				});
			var n = a(94),
				r = a.n(n),
				c = '[E-COMMERCE APP] GET PRODUCTS',
				o = '[E-COMMERCE APP] SET PRODUCTS SEARCH TEXT';
			function l() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/products');
				return function (t) {
					return e.then(function (e) {
						return t({ type: c, payload: e.data });
					});
				};
			}
			function i(e) {
				return { type: o, searchText: e.target.value };
			}
			var s = a(20),
				d = (a(32), '[E-COMMERCE APP] GET PRODUCT'),
				u = '[E-COMMERCE APP] SAVE PRODUCT';
			function m(e) {
				var t = r.a.get(
					'https://art-shop-server.herokuapp.com/api/e-commerce-app/product/'.concat(e.productId)
				);
				return function (e) {
					return t.then(function (t) {
						return e({ type: d, payload: t.data });
					});
				};
			}
			function p() {
				var e = {
					id: s.a.generateGUID(),
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
				return { type: d, payload: e };
			}
			var f = '[E-COMMERCE APP] GET ORDERS',
				h = '[E-COMMERCE APP] SET ORDERS SEARCH TEXT';
			function g() {
				var e = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/orders');
				return function (t) {
					return e.then(function (e) {
						return t({ type: f, payload: e.data });
					});
				};
			}
			function E(e) {
				return { type: h, searchText: e.target.value };
			}
			var v = '[E-COMMERCE APP] GET ORDER',
				b = '[E-COMMERCE APP] SAVE ORDER';
			function y(e) {
				var t = r.a.get('https://art-shop-server.herokuapp.com/api/e-commerce-app/order/'.concat(e.orderId));
				return function (e) {
					return t.then(function (t) {
						return e({ type: v, payload: t.data });
					});
				};
			}
		},
		1136: function (e, t, a) {
			'use strict';
			var n = a(0),
				r = n.createContext();
			t.a = r;
		},
		1137: function (e, t, a) {
			'use strict';
			var n = a(212),
				r = a(0),
				c = a.n(r);
			t.a = function (e, t) {
				return function (a) {
					return (
						Object(n.b)(e, t),
						function (e) {
							return c.a.createElement(a, e);
						}
					);
				};
			};
		},
		1138: function (e, t, a) {
			'use strict';
			var n = a(57),
				r = a(9),
				c = a(1135),
				o = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.a:
						case c.e:
							return Object(r.a)({}, t.payload);
						default:
							return e;
					}
				},
				l = { data: [], searchText: '' },
				i = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.b:
							return Object(r.a)({}, e, { data: t.payload });
						case c.g:
							return Object(r.a)({}, e, { searchText: t.searchText });
						default:
							return e;
					}
				},
				s = { data: null },
				d = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.c:
						case c.f:
							return Object(r.a)({}, e, { data: t.payload });
						default:
							return e;
					}
				},
				u = { data: [], searchText: '' },
				m = function () {
					var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u,
						t = arguments.length > 1 ? arguments[1] : void 0;
					switch (t.type) {
						case c.d:
							return Object(r.a)({}, e, { data: t.payload });
						case c.h:
							return Object(r.a)({}, e, { searchText: t.searchText });
						default:
							return e;
					}
				},
				p = Object(n.d)({ products: m, product: d, orders: i, order: o });
			t.a = p;
		},
		1139: function (e, t, a) {
			'use strict';
			var n = a(0),
				r = n.createContext();
			t.a = r;
		},
		1147: function (e, t, a) {
			'use strict';
			var n = a(3),
				r = a(1),
				c = a(0),
				o = (a(4), a(2)),
				l = a(7),
				i = a(1139),
				s = c.forwardRef(function (e, t) {
					var a = e.classes,
						l = e.className,
						s = e.component,
						d = void 0 === s ? 'table' : s,
						u = e.padding,
						m = void 0 === u ? 'default' : u,
						p = e.size,
						f = void 0 === p ? 'medium' : p,
						h = e.stickyHeader,
						g = void 0 !== h && h,
						E = Object(n.a)(e, ['classes', 'className', 'component', 'padding', 'size', 'stickyHeader']),
						v = c.useMemo(
							function () {
								return { padding: m, size: f, stickyHeader: g };
							},
							[m, f, g]
						);
					return c.createElement(
						i.a.Provider,
						{ value: v },
						c.createElement(
							d,
							Object(r.a)(
								{
									role: 'table' === d ? null : 'table',
									ref: t,
									className: Object(o.a)(a.root, l, g && a.stickyHeader)
								},
								E
							)
						)
					);
				});
			t.a = Object(l.a)(
				function (e) {
					return {
						root: {
							display: 'table',
							width: '100%',
							borderCollapse: 'collapse',
							borderSpacing: 0,
							'& caption': Object(r.a)(
								Object(r.a)({}, e.typography.body2),
								{},
								{
									padding: e.spacing(2),
									color: e.palette.text.secondary,
									textAlign: 'left',
									captionSide: 'bottom'
								}
							)
						},
						stickyHeader: { borderCollapse: 'separate' }
					};
				},
				{ name: 'MuiTable' }
			)(s);
		},
		1148: function (e, t, a) {
			'use strict';
			var n = a(1),
				r = a(3),
				c = a(0),
				o = (a(4), a(2)),
				l = a(7),
				i = a(1136),
				s = { variant: 'head' },
				d = c.forwardRef(function (e, t) {
					var a = e.classes,
						l = e.className,
						d = e.component,
						u = void 0 === d ? 'thead' : d,
						m = Object(r.a)(e, ['classes', 'className', 'component']);
					return c.createElement(
						i.a.Provider,
						{ value: s },
						c.createElement(
							u,
							Object(n.a)(
								{ className: Object(o.a)(a.root, l), ref: t, role: 'thead' === u ? null : 'rowgroup' },
								m
							)
						)
					);
				});
			t.a = Object(l.a)({ root: { display: 'table-header-group' } }, { name: 'MuiTableHead' })(d);
		},
		1149: function (e, t, a) {
			'use strict';
			var n = a(1),
				r = a(3),
				c = a(0),
				o = (a(4), a(2)),
				l = a(7),
				i = a(1136),
				s = a(16),
				d = c.forwardRef(function (e, t) {
					var a = e.classes,
						l = e.className,
						s = e.component,
						d = void 0 === s ? 'tr' : s,
						u = e.hover,
						m = void 0 !== u && u,
						p = e.selected,
						f = void 0 !== p && p,
						h = Object(r.a)(e, ['classes', 'className', 'component', 'hover', 'selected']),
						g = c.useContext(i.a);
					return c.createElement(
						d,
						Object(n.a)(
							{
								ref: t,
								className: Object(o.a)(
									a.root,
									l,
									g && { head: a.head, footer: a.footer }[g.variant],
									m && a.hover,
									f && a.selected
								),
								role: 'tr' === d ? null : 'row'
							},
							h
						)
					);
				});
			t.a = Object(l.a)(
				function (e) {
					return {
						root: {
							color: 'inherit',
							display: 'table-row',
							verticalAlign: 'middle',
							outline: 0,
							'&$hover:hover': { backgroundColor: e.palette.action.hover },
							'&$selected, &$selected:hover': {
								backgroundColor: Object(s.c)(e.palette.secondary.main, e.palette.action.selectedOpacity)
							}
						},
						selected: {},
						hover: {},
						head: {},
						footer: {}
					};
				},
				{ name: 'MuiTableRow' }
			)(d);
		},
		1150: function (e, t, a) {
			'use strict';
			var n = a(3),
				r = a(1),
				c = a(0),
				o = (a(4), a(2)),
				l = a(7),
				i = a(10),
				s = a(16),
				d = a(1139),
				u = a(1136),
				m = c.forwardRef(function (e, t) {
					var a,
						l,
						s = e.align,
						m = void 0 === s ? 'inherit' : s,
						p = e.classes,
						f = e.className,
						h = e.component,
						g = e.padding,
						E = e.scope,
						v = e.size,
						b = e.sortDirection,
						y = e.variant,
						O = Object(n.a)(e, [
							'align',
							'classes',
							'className',
							'component',
							'padding',
							'scope',
							'size',
							'sortDirection',
							'variant'
						]),
						x = c.useContext(d.a),
						j = c.useContext(u.a),
						C = j && 'head' === j.variant;
					h ? ((l = h), (a = C ? 'columnheader' : 'cell')) : (l = C ? 'th' : 'td');
					var N = E;
					!N && C && (N = 'col');
					var T = g || (x && x.padding ? x.padding : 'default'),
						R = v || (x && x.size ? x.size : 'medium'),
						w = y || (j && j.variant),
						A = null;
					return (
						b && (A = 'asc' === b ? 'ascending' : 'descending'),
						c.createElement(
							l,
							Object(r.a)(
								{
									ref: t,
									className: Object(o.a)(
										p.root,
										p[w],
										f,
										'inherit' !== m && p['align'.concat(Object(i.a)(m))],
										'default' !== T && p['padding'.concat(Object(i.a)(T))],
										'medium' !== R && p['size'.concat(Object(i.a)(R))],
										'head' === w && x && x.stickyHeader && p.stickyHeader
									),
									'aria-sort': A,
									role: a,
									scope: N
								},
								O
							)
						)
					);
				});
			t.a = Object(l.a)(
				function (e) {
					return {
						root: Object(r.a)(
							Object(r.a)({}, e.typography.body2),
							{},
							{
								display: 'table-cell',
								verticalAlign: 'inherit',
								borderBottom: '1px solid\n    '.concat(
									'light' === e.palette.type
										? Object(s.e)(Object(s.c)(e.palette.divider, 1), 0.88)
										: Object(s.a)(Object(s.c)(e.palette.divider, 1), 0.68)
								),
								textAlign: 'left',
								padding: 16
							}
						),
						head: {
							color: e.palette.text.primary,
							lineHeight: e.typography.pxToRem(24),
							fontWeight: e.typography.fontWeightMedium
						},
						body: { color: e.palette.text.primary },
						footer: {
							color: e.palette.text.secondary,
							lineHeight: e.typography.pxToRem(21),
							fontSize: e.typography.pxToRem(12)
						},
						sizeSmall: {
							padding: '6px 24px 6px 16px',
							'&:last-child': { paddingRight: 16 },
							'&$paddingCheckbox': {
								width: 24,
								padding: '0 12px 0 16px',
								'&:last-child': { paddingLeft: 12, paddingRight: 16 },
								'& > *': { padding: 0 }
							}
						},
						paddingCheckbox: {
							width: 48,
							padding: '0 0 0 4px',
							'&:last-child': { paddingLeft: 0, paddingRight: 4 }
						},
						paddingNone: { padding: 0, '&:last-child': { padding: 0 } },
						alignLeft: { textAlign: 'left' },
						alignCenter: { textAlign: 'center' },
						alignRight: { textAlign: 'right', flexDirection: 'row-reverse' },
						alignJustify: { textAlign: 'justify' },
						stickyHeader: {
							position: 'sticky',
							top: 0,
							left: 0,
							zIndex: 2,
							backgroundColor: e.palette.background.default
						}
					};
				},
				{ name: 'MuiTableCell' }
			)(m);
		},
		1151: function (e, t, a) {
			'use strict';
			var n = a(1),
				r = a(3),
				c = a(0),
				o = (a(4), a(2)),
				l = a(7),
				i = a(1136),
				s = { variant: 'body' },
				d = c.forwardRef(function (e, t) {
					var a = e.classes,
						l = e.className,
						d = e.component,
						u = void 0 === d ? 'tbody' : d,
						m = Object(r.a)(e, ['classes', 'className', 'component']);
					return c.createElement(
						i.a.Provider,
						{ value: s },
						c.createElement(
							u,
							Object(n.a)(
								{ className: Object(o.a)(a.root, l), ref: t, role: 'tbody' === u ? null : 'rowgroup' },
								m
							)
						)
					);
				});
			t.a = Object(l.a)({ root: { display: 'table-row-group' } }, { name: 'MuiTableBody' })(d);
		},
		1166: function (e, t, a) {
			'use strict';
			a.r(t);
			var n = a(152),
				r = a(1137),
				c = a(0),
				o = a.n(c),
				l = a(1138),
				i = a(125),
				s = a(1119),
				d = a(1107),
				u = a(180),
				m = a(36),
				p = a(31),
				f = a(8);
			var h = function (e) {
					var t = Object(f.c)(function (e) {
							return e.eCommerceApp.order;
						}),
						a = Object(m.a)();
					return o.a.createElement(
						'div',
						{ className: 'flex flex-1 w-full items-center justify-between' },
						o.a.createElement(
							'div',
							{ className: 'flex flex-col items-start max-w-full' },
							o.a.createElement(
								i.a,
								{ animation: 'transition.slideRightIn', delay: 300 },
								o.a.createElement(
									u.a,
									{
										className: 'normal-case flex items-center sm:mb-12',
										component: p.a,
										role: 'button',
										to: '/apps/e-commerce/cart/1',
										color: 'inherit'
									},
									o.a.createElement(
										d.a,
										{ className: 'text-20' },
										'ltr' === a.direction ? 'arrow_back' : 'arrow_forward'
									),
									o.a.createElement('span', { className: 'mx-4' }, 'Cart')
								)
							),
							o.a.createElement(
								'div',
								{ className: 'flex flex-col min-w-0 items-center sm:items-start' },
								null != t
									? o.a.createElement(
											i.a,
											{ animation: 'transition.slideLeftIn', delay: 300 },
											o.a.createElement(
												u.a,
												{ className: 'text-16 sm:text-20 truncate' },
												'Order '.concat(t.reference)
											)
									  )
									: null,
								null != t
									? o.a.createElement(
											i.a,
											{ animation: 'transition.slideLeftIn', delay: 300 },
											o.a.createElement(
												u.a,
												{ variant: 'caption' },
												'From '.concat(t.customer.firstName, ' ').concat(t.customer.lastName)
											)
									  )
									: null
							)
						),
						o.a.createElement(
							'div',
							null,
							o.a.createElement(
								i.a,
								{ animation: 'transition.slideRightIn', delay: 300 },
								o.a.createElement(
									s.a,
									{
										className: 'whitespace-no-wrap normal-case',
										variant: 'contained',
										color: 'secondary',
										component: p.a,
										to: '/apps/e-commerce/products'
									},
									o.a.createElement(d.a, null, 'attach_money'),
									'Complete Order'
								)
							)
						)
					);
				},
				g = a(35),
				E = a(1135),
				v = a(124),
				b = a(1147),
				y = a(1151),
				O = a(1150),
				x = a(1148),
				j = a(1149),
				C = a(1123),
				N = a(1124);
			t.default = Object(r.a)('eCommerceApp', l.a)(function (e) {
				var t = Object(f.b)(),
					a = Object(f.c)(function (e) {
						return e.eCommerceApp.order;
					}),
					r = Object(g.h)();
				Object(v.b)(
					function () {
						t(E.i(r));
					},
					[t, r]
				);
				var c = new Intl.NumberFormat('en-US', {
					style: 'currency',
					currency: 'USD',
					minimumFractionDigits: 2
				});
				return o.a.createElement(n.a, {
					classes: { content: 'flex', header: 'min-h-72 h-72 sm:h-136 sm:min-h-136' },
					header: o.a.createElement(h, null),
					content: o.a.createElement(
						'div',
						{ className: 'flex-grow flex-shrink-0 p-0' },
						a &&
							o.a.createElement(
								C.a,
								{ className: 'w-xl mx-auto', elevation: 0 },
								o.a.createElement(
									N.a,
									{ className: 'p-88 print:p-0' },
									o.a.createElement(
										'div',
										{ className: 'mt-64' },
										o.a.createElement(
											b.a,
											{ className: 'simple' },
											o.a.createElement(
												x.a,
												null,
												o.a.createElement(
													j.a,
													null,
													o.a.createElement(O.a, null, 'PRODUCT'),
													o.a.createElement(O.a, null, 'PRICE'),
													o.a.createElement(O.a, { align: 'right' }, 'QUANTITY'),
													o.a.createElement(O.a, { align: 'right' }, 'TOTAL')
												)
											),
											o.a.createElement(
												y.a,
												null,
												a.products.map(function (e) {
													return o.a.createElement(
														j.a,
														{ key: e.id },
														o.a.createElement(
															O.a,
															null,
															o.a.createElement(u.a, { variant: 'subtitle1' }, e.name)
														),
														o.a.createElement(O.a, { align: 'right' }, c.format(e.price)),
														o.a.createElement(O.a, { align: 'right' }, e.quantity),
														o.a.createElement(
															O.a,
															{ align: 'right' },
															c.format(e.price * e.quantity)
														)
													);
												})
											)
										),
										o.a.createElement(
											b.a,
											{ className: 'simple mt-32' },
											o.a.createElement(
												y.a,
												null,
												o.a.createElement(
													j.a,
													null,
													o.a.createElement(
														O.a,
														null,
														o.a.createElement(
															u.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															'SUBTOTAL'
														)
													),
													o.a.createElement(
														O.a,
														{ align: 'right' },
														o.a.createElement(
															u.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															c.format(a.subtotal)
														)
													)
												),
												o.a.createElement(
													j.a,
													null,
													o.a.createElement(
														O.a,
														null,
														o.a.createElement(
															u.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															'TAX'
														)
													),
													o.a.createElement(
														O.a,
														{ align: 'right' },
														o.a.createElement(
															u.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															c.format(a.tax)
														)
													)
												),
												o.a.createElement(
													j.a,
													null,
													o.a.createElement(
														O.a,
														null,
														o.a.createElement(
															u.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															'DISCOUNT'
														)
													),
													o.a.createElement(
														O.a,
														{ align: 'right' },
														o.a.createElement(
															u.a,
															{
																className: 'font-medium',
																variant: 'subtitle1',
																color: 'textSecondary'
															},
															c.format(a.discount)
														)
													)
												),
												o.a.createElement(
													j.a,
													null,
													o.a.createElement(
														O.a,
														null,
														o.a.createElement(
															u.a,
															{
																className: 'font-light',
																variant: 'h4',
																color: 'textSecondary'
															},
															'TOTAL'
														)
													),
													o.a.createElement(
														O.a,
														{ align: 'right' },
														o.a.createElement(
															u.a,
															{
																className: 'font-light',
																variant: 'h4',
																color: 'textSecondary'
															},
															c.format(a.total)
														)
													)
												)
											)
										)
									)
								)
							)
					),
					innerScroll: !0
				});
			});
		}
	}
]);
