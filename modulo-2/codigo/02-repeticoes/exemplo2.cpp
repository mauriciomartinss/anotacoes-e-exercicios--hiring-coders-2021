//tabuada usando a repeticao "para" - ele eh mais usado quando o limite eh conhecido ou definido
#include <iostream>
using namespace std;

int main() {
    int num, resultado;
    cout << "qual tabuada? ";
    cin >> num;
    for (int i = 1; i <= 10; i++) {
        resultado = num * i;
        cout << "num x" << i << " = " << resultado
             << endl;
    }
}