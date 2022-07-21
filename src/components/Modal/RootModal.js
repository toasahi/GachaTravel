import React, { memo } from 'react';
import { Text, View } from 'react-native';
import Light from '../../assets/light.svg';
import BGrid from '../../assets/B2grid.svg';

export const RootModal = memo(() => {
  return (
    <View style={{ marginTop: 20 }}>
      <View
        style={{
          backgroundColor: '#3896d9',
          borderColor: '#186eab',
          borderWidth: 3,
          paddingHorizontal: 3,
          paddingBottom: 3,
          borderRadius: 40,
          position: 'relative',
        }}
      >
        <Light style={{ top: 10, left: 20, position: 'absolute' }} />
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 23,
            fontWeight: 'bold',
            marginHorizontal: 14,
            padding: 18,
            fontFamily: 'Noto Sans',
          }}
        >
          おすすめのルート
        </Text>
        <View
          nativeID="modal_wrap_content"
          style={{
            backgroundColor: '#fff',
            paddingTop: 35,
            borderBottomEndRadius: 35,
            borderBottomStartRadius: 35,
            paddingBottom: 40,
          }}
        >
          <BGrid style={{ position: 'absolute' }} />
          <View nativeID="modal_wrap_inner" style={{ height: 335 }}>
            <View
              nativeID="root_wrap"
              style={{
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              <View
                style={{
                  padding: 2,
                  borderRadius: 22,
                  backgroundColor: '#186eab',
                }}
              >
                <View
                  nativeID="root_content"
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                    borderWidth: 3,
                    borderColor: '#3896d9',
                    borderRadius: 22,
                    position: 'relative',
                    backgroundColor: '#f5fbff',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#3896d9',
                      width: 26,
                      height: 26,
                      borderRadius: 50,
                      top: -10,
                      left: -5,
                    }}
                  >
                    <Text style={{ color: '#fff', textAlign: 'center', alignItems: 'center', marginTop: 3 }}>1</Text>
                  </View>
                  {/*<View style={{ marginRight: 'auto', marginLeft: 'auto' }}>*/}
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#3896d9',
                      marginBottom: 4,
                      fontFamily: 'Noto Sans',
                    }}
                  >
                    1日まるまる遊べるルート
                  </Text>
                  <Text style={{ color: '#777', fontSize: 12, fontFamily: 'Noto Sans', marginTop: 7 }}>
                    移動：公共交通機関
                  </Text>
                  <Text style={{ color: '#777', fontSize: 12, fontFamily: 'Noto Sans', marginTop: 7 }}>種類：遊び</Text>
                </View>
              </View>
              <View
                style={{
                  padding: 2,
                  borderRadius: 22,
                  backgroundColor: '#186eab',
                  marginTop: 12,
                }}
              >
                <View
                  nativeID="root_content"
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                    borderWidth: 3,
                    borderColor: '#3896d9',
                    borderRadius: 22,
                    position: 'relative',
                    backgroundColor: '#f5fbff',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#3896d9',
                      width: 26,
                      height: 26,
                      borderRadius: 50,
                      top: -10,
                      left: -5,
                    }}
                  >
                    <Text style={{ color: '#fff', textAlign: 'center', alignItems: 'center', marginTop: 3 }}>2</Text>
                  </View>
                  {/*<View style={{ marginRight: 'auto', marginLeft: 'auto' }}>*/}
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#3896d9',
                      marginBottom: 4,
                      fontFamily: 'Noto Sans',
                    }}
                  >
                    名物食べ歩きルート
                  </Text>
                  <Text style={{ color: '#777', fontSize: 12, fontFamily: 'Noto Sans', marginTop: 5 }}>移動：徒歩</Text>
                  <Text style={{ color: '#777', fontSize: 12, fontFamily: 'Noto Sans', marginTop: 5 }}>
                    種類：グルメ
                  </Text>
                </View>
              </View>
              <View
                style={{
                  padding: 2,
                  borderRadius: 22,
                  backgroundColor: '#186eab',
                  marginTop: 12,
                }}
              >
                <View
                  nativeID="root_content"
                  style={{
                    paddingVertical: 15,
                    paddingHorizontal: 30,
                    borderWidth: 3,
                    borderColor: '#3896d9',
                    borderRadius: 22,
                    position: 'relative',
                    backgroundColor: '#f5fbff',
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      backgroundColor: '#3896d9',
                      width: 26,
                      height: 26,
                      borderRadius: 50,
                      top: -10,
                      left: -5,
                    }}
                  >
                    <Text style={{ color: '#fff', textAlign: 'center', alignItems: 'center', marginTop: 3 }}>3</Text>
                  </View>
                  {/*<View style={{ marginRight: 'auto', marginLeft: 'auto' }}>*/}
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      color: '#3896d9',
                      marginBottom: 4,
                      fontFamily: 'Noto Sans',
                    }}
                  >
                    定番観光ルート
                  </Text>
                  <Text style={{ color: '#777', fontSize: 12, fontFamily: 'Noto Sans', marginTop: 5 }}>
                    移動：公共交通機関
                  </Text>
                  <Text style={{ color: '#777', fontSize: 12, fontFamily: 'Noto Sans', marginTop: 5 }}>種類：観光</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});
