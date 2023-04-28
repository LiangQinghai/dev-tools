package internal

var bindingInterface []any

// Register 注册binging
func Register(ifc ...any) {
	if ifc != nil && len(ifc) != 0 {
		bindingInterface = append(bindingInterface, ifc...)
	}
}

// GetRegisterList 获取注册列表
func GetRegisterList() []any {
	return bindingInterface
}
