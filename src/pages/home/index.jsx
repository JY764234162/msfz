import { useNavigate } from "react-router-dom";
import { Switch } from "antd";
import { WaveButton } from "@/components/AnimateButtons/WaveButton";
import { ShadowButton } from "@/components/AnimateButtons/ShadowButton";
import { EdgeExtendButton } from "@/components/AnimateButtons/EdgeExtendButton";
import { AngleExtendButton } from "@/components/AnimateButtons/AngleExtendButton";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={`app-container`}>
      <div className="app-header">
        <h1>面试题库</h1>
        <p>选择你感兴趣的方向</p>
      </div>
      <div className="button-grid">
        <WaveButton
          onClick={() => navigate("/frontend")}
          style={{ width: 250, height: 80, fontSize: 30 }}
        >
          前端
        </WaveButton>
        <EdgeExtendButton
          onClick={() => navigate("/backend")}
          style={{ width: 250, height: 80, fontSize: 30 }}
        >
          后端
        </EdgeExtendButton>
        <ShadowButton
          onClick={() => navigate("/linux")}
          style={{ width: 250, height: 80, fontSize: 30 }}
        >
          Linux运维
        </ShadowButton>
        <AngleExtendButton
          onClick={() => navigate("/cloudComputing")}
          style={{ width: 250, height: 80, fontSize: 30 }}
        >
          云计算
        </AngleExtendButton>
        <AngleExtendButton
          onClick={() => navigate("/dataAnalysis")}
          style={{ width: 250, height: 80, fontSize: 30 }}
        >
          数据分析
        </AngleExtendButton>
      </div>
    </div>
  );
}
